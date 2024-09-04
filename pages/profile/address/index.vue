<template>
  <ProfileContent>
    <div class="border-solid border-[1px] flex flex-col gap-3 border-gray-200 p-5 h-full rounded-md w-full">
      <div class="w-full flex justify-between items-center">
        <h3 class="text-[26px] font-medium">Address</h3>
        <Button class="!text-[12px] sm:!text-sm font-semibold">Add new address</Button>
      </div>
      <div
          class="border-solid border-[1px] grid grid-cols-1 md:grid-cols-2 gap-3 border-gray-200 p-5 h-full rounded-md w-full">
        <div class="border-solid border-[1px] flex justify-between items-start border-gray-200 p-5 h-full rounded-md">
          <div class="flex flex-col overflow-hidden">
            <span>State</span>
            <span>Country</span>
            <span>City</span>
            <span>Street</span>
            <span>Postal code</span>
          </div>
          <div class="card flex justify-center">
            <Button type="button" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true"
                    aria-controls="overlay_menu"/>
            <Menu ref="menu" id="overlay_menu" :model="items" :popup="true"/>
          </div>
        </div>
      </div>
    </div>
  </ProfileContent>
</template>

<script setup>
import {ref} from "vue";

const menu = ref();
const items = ref([
      {
        label: 'Edit',
        icon: 'pi pi-pen-to-square'
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash'
      }
    ]
);

const toggle = (event) => {
  menu.value.toggle(event);
};
</script>