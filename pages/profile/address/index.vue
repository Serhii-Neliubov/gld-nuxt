<template>
  <ProfileContent>
    <div class="border-solid border-[1px] flex flex-col gap-3 border-gray-200 p-5 h-full rounded-md w-full">
      <div class="w-full flex justify-between items-center">
        <h3 class="text-[26px] font-medium">Address</h3>
        <router-link to="/profile/address/add">
          <Button class="!text-[12px] sm:!text-sm font-semibold">Add new address</Button>
        </router-link>
      </div>
      <div
          class="border-solid border-[1px] grid grid-cols-1 md:grid-cols-2 gap-3 border-gray-200 p-5 h-full rounded-md w-full">
        <div
            v-for="address in addresses"
            :key="address._id"
            class="border-solid border-[1px] flex justify-between items-start border-gray-200 p-5 h-full rounded-md">
          <div class="flex flex-col overflow-hidden">
            <span>{{ address.state }}</span>
            <span>{{ address.country }}</span>
            <span>{{ address.city }}</span>
            <span>{{ address.street }}</span>
            <span>{{ address.postal_code }}</span>
          </div>
          <div class="card flex justify-center">
            <Button type="button" icon="pi pi-ellipsis-v" @click="event => toggleAddressMenu(event, address._id)"
                    aria-haspopup="true"
                    :aria-controls="'overlay_menu_' + address._id"/>
            <Menu :ref="setMenuRef(address._id)" :id="'overlay_menu_' + address._id" :model="getItems(address)"
                  :popup="true"/>
          </div>
        </div>
      </div>
    </div>
  </ProfileContent>
</template>

<script setup lang="ts">
import {GetAddressesRequest} from '~/api/addresses/request/GetAddressesRequest';
import {DeleteAddressRequest} from "~/api/addresses/request/DeleteAddressRequest";
import {useUserStore} from '~/stores/useUserStore';

const userStore = useUserStore();
const user = computed(() => userStore.user);

const menuRefs = ref<{ [key: string]: any }>({});
const loading = ref(false);
const addresses = ref<Address[]>([]);

onMounted(async () => {
  try {
    loading.value = true;
    addresses.value = await GetAddressesRequest(user.value?._id as string);
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
});

const getItems = (address: Address) => [
  {
    label: 'Edit',
    icon: 'pi pi-pen-to-square',
    command: () => navigateTo(`/profile/address/edit/${address._id}`),
  },
  {
    label: 'Delete',
    icon: 'pi pi-trash',
    command: () => deleteAddressHandler(user.value?._id as string, address._id),
  },
];

const setMenuRef = (id: string) => (el: any) => {
  if (el) {
    menuRefs.value[id] = el;
  }
};

const toggleAddressMenu = (event: Event, id: string) => {
  const menu = menuRefs.value[id];
  menu.toggle(event);
};

const deleteAddressHandler = async (userId: string, addressId: string) => {
  await DeleteAddressRequest(userId, addressId)
  addresses.value = await GetAddressesRequest(user.value?._id as string);
}
</script>
