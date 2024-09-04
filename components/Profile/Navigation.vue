<template>
  <Menu :model="items" class="sm:max-w-[250px] w-full [&>ul]:!p-0">
    <template #item="{ item, props }">
      <router-link v-if="item.route" v-slot="{ href, navigate }"
                   :to="item.route" custom>
        <a v-ripple :class="route.fullPath === item.route ? '!bg-[#F3F8FF] !text-[#0989FF]' : ''" :href="href"
           v-bind="props.action" @click="navigate">
          <span :class="item.icon"/>
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
      <a v-ripple v-else :class="route.fullPath === item.route ? '!bg-[#F3F8FF] !text-[#0989FF]' : ''"
         v-bind="props.action">
        <span :class="item.icon"/>
        <span class="ml-2">{{ item.label }}</span>
      </a>
    </template>
  </Menu>
</template>

<script setup lang="ts">
import {useUserStore} from "~/stores/useUserStore";

const userStore = useUserStore();
const route = useRoute();

const items = ref([
  {label: 'Profile', icon: 'pi pi-user', route: '/profile'},
  {label: 'Address', icon: 'pi pi-map-marker', route: '/profile/address'},
  {label: 'My Orders', icon: 'pi pi-list', route: '/profile/my-orders'},
  {label: 'Wishlist', icon: 'pi pi-heart', route: '/wishlist'},
  {label: 'Change Password', icon: 'pi pi-lock', route: '/profile/change-password'},
  {label: 'Help And Support', icon: 'pi pi-question-circle', route: '/help-support'},
  {label: 'Terms & Conditions', icon: 'pi pi-file', route: '/terms-conditions'},
  {label: 'Contact Us', icon: 'pi pi-user-edit', route: '/contact-us'},
  {label: 'Logout', icon: 'pi pi-sign-out', command: async () => await userStore.logout()},
]);
</script>