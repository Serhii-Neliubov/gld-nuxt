<template>
  <ProfileContent>
    <div class="border-solid border-[1px] flex flex-col gap-3 border-gray-200 p-5 h-full rounded-md w-full">
      <h3 class="text-[26px] font-medium">Hello, {{ user?.name }}</h3>
      <InputText
          v-model="profileData.name"
          placeholder="Username"
          :invalid='errors.includes("name")'
          class="w-full"
      />
      <InputText
          v-model="profileData.phoneNumber"
          placeholder="Phone number"
          :invalid='errors.includes("phoneNumber")'
      />
      <InputText
          v-model="profileData.address"
          placeholder="Address"
          :invalid='errors.includes("address")'
      />
      <Textarea
          auto-resize
          v-model="profileData.bio"
          class="min-h-[200px] w-full"
          placeholder="Hi there, this is my bio..."
          :invalid='errors.includes("bio")'
      />
      <div class="w-full flex items-end justify-end">
        <Button @click="updateProfileHandler" :disabled="loading" class="max-w-[180px] w-full">Update profile</Button>
      </div>
    </div>
  </ProfileContent>
</template>

<script setup lang="ts">
import {validate} from "~/composables/useValidation";
import {UpdateProfileRequest} from "~/api/user/profile/requests/UpdateProfileRequest";

useSeoMeta({
  title: 'Profile | Gldcart',
  ogTitle: 'Profile | Gldcart',
  description: 'Gldcart profile',
  ogDescription: 'Gldcart profile',
})

const userStore = useUserStore();
const toast = useToast();

const user = computed(() => userStore.user);

const loading = ref<boolean>(false);
const errors = ref<string[]>([]);
const profileData = reactive({
  name: '',
  phoneNumber: '',
  address: '',
  bio: '',
})

async function updateProfileHandler() {
  errors.value = validate(profileData);

  if (errors.value.length) {
    return toast.add({
      severity: 'error',
      summary: 'Error Message',
      detail: 'If you want to contact us you need to fill all fields correctly!',
      life: 3000
    });
  }

  try {
    loading.value = true;

    await UpdateProfileRequest(user.value?._id as string, {...profileData, email: user.value?.email as string});
    await userStore.logout();

  } catch (e) {
    console.log(e)
  } finally {
    errors.value = [];
    loading.value = false;
  }
}

</script>