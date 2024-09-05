<template>
  <ProfileContent>
    <div class="border-solid items-end border-[1px] flex flex-col gap-3 border-gray-200 p-5 h-full rounded-md w-full">
      <div class="w-full flex justify-between items-center">
        <h3 class="text-[26px] font-medium">Edit Address</h3>

        <router-link to="/profile/address" class="!text-[12px] sm:!text-sm font-semibold">
          <Button>
            <i class="pi pi-angle-left"/>
          </Button>
        </router-link>
      </div>

      <InputText
          placeholder="State"
          class="w-full"
          v-model="addressData.state"
          :invalid='errors.includes("state")'
      />
      <InputText
          placeholder="Country"
          class="w-full"
          v-model="addressData.country"
          :invalid='errors.includes("country")'
      />
      <InputText
          placeholder="City"
          class="w-full"
          v-model="addressData.city"
          :invalid='errors.includes("city")'
      />
      <InputText
          placeholder="Street"
          class="w-full"
          v-model="addressData.street"
          :invalid='errors.includes("street")'
      />
      <InputText
          placeholder="Postal code"
          class="w-full"
          v-model="addressData.postal_code"
          :invalid='errors.includes("postal_code")'
      />

      <Button :disabled="loading" @click="onSubmit" class="disabled:bg-gray-200 mt-4 w-fit">Submit</Button>
    </div>
  </ProfileContent>
</template>

<script setup lang="ts">
import {validate} from "~/composables/useValidation";
import {useUserStore} from "~/stores/useUserStore";
import {ChangeAddressRequest} from "~/api/user/addresses/request/ChangeAddressRequest";

const toast = useToast();
const userStore = useUserStore();
const route = useRoute()

const user = computed(() => userStore.user);

const loading = ref<boolean>(false);
const errors = ref<string[]>([]);
const addressData = reactive({
  state: '',
  country: '',
  city: '',
  street: '',
  postal_code: '',
})

const onSubmit = async () => {
  errors.value = validate(addressData);

  if (errors.value.length) {
    return toast.add({
      severity: 'error',
      summary: 'Error Message',
      detail: 'If you want to change address you need to fill all fields correctly!',
      life: 3000
    });
  }

  try {
    loading.value = true;

    await ChangeAddressRequest(user.value?._id as string, route.params.id as string, addressData);

    toast.add({
      severity: 'success',
      summary: 'Success Message',
      detail: 'Address changed successfully!',
      life: 3000
    });

    navigateTo('/profile/address');
  } catch (e) {
    console.log(e)

    toast.add({
      severity: 'error',
      summary: 'Error Message',
      detail: 'An error occurred while changing address!',
      life: 3000
    });
  } finally {
    errors.value = [];
    loading.value = false;
  }
};

</script>