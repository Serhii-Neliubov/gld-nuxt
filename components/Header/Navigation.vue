<template>
  <Menubar :model="items" class="!bg-transparent">
    <template #item="{ item, props, hasSubmenu }">
      <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon"/>
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
        <span :class="item.icon"/>
        <span class="ml-2">{{ item.label }}</span>
        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2"/>
      </a>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
const router = useRouter();

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => {
      router.push('/');
    }
  },
  {
    label: 'Renting',
    icon: 'pi pi-car',
    command: () => {
      router.push('/renting');
    }
  },
  {
    label: 'Products',
    icon: 'pi pi-gift',
    command: () => {
      router.push('/products');
    }
  },
  {
    label: 'Professional Services',
    icon: 'pi pi-briefcase',
    command: () => {
      router.push('/professional-services');
    }
  },
  {
    label: 'Contact Us',
    icon: 'pi pi-question-circle',
    command: () => {
      router.push('/contact-us');
    }
  }
]);
</script>