<template>
  <div class="border-y border-solid border-gray-300">
    <Menubar :model="items" class="!bg-transparent max-w-[1255px] px-[20px] mx-auto">
      <template #start>
        <h3 class="font-semibold text-2xl">Exclusive</h3>
      </template>
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
      <template #end>
        <div class="flex items-center gap-4">
          <router-link to="/shopping-cart">
            <i class="pi-shopping-cart pi text-[20px]"/>
          </router-link>
          <router-link to="/wishlist">
            <i class="pi-heart pi text-[20px]"/>
          </router-link>
          <router-link to="/profile">
            <Avatar image="/" shape="circle"/>
          </router-link>
        </div>
      </template>
    </Menubar>
  </div>
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