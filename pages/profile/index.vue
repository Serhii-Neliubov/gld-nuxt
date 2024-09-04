<template>
  <div class="max-w-[1255px] flex flex-col sm:flex-row h-full gap-4 px-[20px] mx-auto py-[40px]">
    <Menu :model="items" class="sm:max-w-[250px] w-full [&>ul]:!p-0">
      <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon"/>
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple @click="selectLabelHandler(item.prefix)"
           :class="selectedLabel === item.prefix ? '!bg-[#F3F8FF] !text-[#0989FF]' : '' " :href="item.url"
           :target="item.target"
           v-bind="props.action">
          <span :class="item.icon"/>
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </template>
    </Menu>
    <div class="border-solid border-[1px] flex flex-col gap-3 border-gray-200 p-5 h-full rounded-md w-full">
      <h3 class="text-[26px] font-medium">Hello, {{ user?.name }}</h3>
      <div class="flex gap-3 w-full">
        <InputText
            id="username"
            v-model="profileData.name"
            placeholder="Username"
            :invalid='errors.includes("name")'
            class="w-full"
        />
        <InputText
            id="username"
            v-model="profileData.email"
            placeholder="Email"
            class="w-full"
            :invalid='errors.includes("email")'
        />
      </div>
      <InputText
          id="username"
          v-model="profileData.phoneNumber"
          placeholder="Phone number"
          :invalid='errors.includes("phoneNumber")'
      />
      <InputText
          id="username"
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
  </div>
</template>

<script setup lang="ts">
import {validate} from "~/composables/useValidation";
import {useAPI} from "~/composables/useAPI";

const userStore = useUserStore();
const toast = useToast();

const user = computed(() => userStore.user);

const selectedLabel = ref<string>('profile');
const loading = ref<boolean>(false);
const errors = ref<string[]>([]);
const profileData = reactive({
  name: '',
  email: '',
  phoneNumber: '',
  address: '',
  bio: '',
})

const items = ref([
  {label: 'Profile', icon: 'pi pi-user', prefix: 'profile'},
  {label: 'Address', icon: 'pi pi-map-marker', prefix: 'address'},
  {label: 'My Orders', icon: 'pi pi-list', prefix: 'orders'},
  {label: 'Wishlist', icon: 'pi pi-heart', route: '/wishlist'},
  {label: 'Change Password', icon: 'pi pi-lock', prefix: 'change-password'},
  {label: 'Help And Support', icon: 'pi pi-question-circle', route: '/help-support'},
  {label: 'Terms & Conditions', icon: 'pi pi-file', route: '/terms-conditions'},
  {label: 'Contact Us', icon: 'pi pi-user-edit', route: '/contact-us'},
  {label: 'Logout', icon: 'pi pi-sign-out', command: async () => await userStore.logout()},
]);

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

    await useAPI('/', {
      method: 'POST',
      body: profileData,
    });
  } catch (e) {
    console.log(e)
  } finally {
    errors.value = [];
    loading.value = false;
  }
}

function selectLabelHandler(prefix: string) {
  selectedLabel.value = prefix;
}
</script>