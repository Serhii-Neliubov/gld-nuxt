<template>
  <ProfileContent title="Change Password">
    <div class="border-solid border-[1px] flex flex-col border-gray-200 p-5 h-full rounded-md w-full">
      <h3 class="text-[26px] font-medium mb-4">Change Password</h3>

      <div class="flex flex-col gap-3 h-full items-end">
        <Password
            placeholder="New Password"
            class="[&>input]:w-full w-full"
            v-model="passwordData.newPassword"
            :invalid="errors.includes('newPassword')"
        />
        <Password
            placeholder="Confirm Password"
            class="[&>input]:w-full w-full"
            v-model="passwordData.confirmPassword"
            :invalid="errors.includes('confirmPassword')"
        />

        <Button :disabled="loading" @click="onSubmit" class="disabled:bg-gray-200 mt-4 w-fit">Submit</Button>
      </div>
    </div>
  </ProfileContent>
</template>

<script setup lang="ts">
import {validate} from "~/composables/useValidation";
import {ChangePasswordRequest} from "~/api/user/password/requests/ChangePasswordRequest";
import {useUserStore} from "~/stores/useUserStore";

const toast = useToast();
const userStore = useUserStore();

const user = computed(() => userStore.user);

const loading = ref<boolean>(false);
const errors = ref<string[]>([]);
const passwordData = reactive({
  newPassword: '',
  confirmPassword: '',
})

const onSubmit = async () => {
  errors.value = validate(passwordData);

  if (errors.value.length) {
    return toast.add({
      severity: 'error',
      summary: 'Error Message',
      detail: 'If you want to change the password you need to fill all fields correctly!',
      life: 3000
    });
  }

  if (passwordData.newPassword !== passwordData.confirmPassword) {
    errors.value = ['confirmPassword'];

    return toast.add({
      severity: 'error',
      summary: 'Error Message',
      detail: 'Passwords do not match!',
      life: 3000
    });
  }

  try {
    loading.value = true;

    await ChangePasswordRequest(user.value?._id as string, passwordData.newPassword);
    await userStore.logout();

    toast.add({
      severity: 'success',
      summary: 'Success Message',
      detail: 'Password changed successfully!',
      life: 3000
    });
  } catch (e) {
    console.error(e);

    toast.add({
      severity: 'error',
      summary: 'Error Message',
      detail: 'Failed to change password!',
      life: 3000
    });
  } finally {
    loading.value = false;
  }
}
</script>