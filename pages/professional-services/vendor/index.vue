<template>
  <div class="py-[50px] mx-auto max-w-[1255px] px-[20px]">
    <h1 class="text-center mb-[45px] text-[36px]">
      Select <span class="text-[#02A0A0]">PROFESSIONAL SERVICES</span> Category
    </h1>
    <div class="p-5 rounded-md shadow-2xl lg:min-h-[675px] bg-white border-gray-200 border-[1px]">
      <span class="uppercase font-semibold">Choose a category</span>
      <div class="lg:w-1/3 w-full mt-4">
        <TieredMenu :model="items" class="w-full">
          <template #item="{ item, props, hasSubmenu }" :aria-hidden="true">
            <a v-ripple class="flex items-center" v-bind="props.action"
               @click="handleClick(item as RentingListItem)">
              <span :class="item.icon"/>
              <span class="ml-2">{{ item.label }}</span>
              <i v-if="hasSubmenu" class="pi pi-angle-right ml-auto"></i>
            </a>
          </template>
        </TieredMenu>
      </div>
    </div>

    <Drawer v-model:visible="visible" position="right" modal header="Edit Profile"
            class="!w-full md:!w-[30rem]">
      <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
      <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24">Username</label>
        <InputText id="username" class="flex-auto" autocomplete="off"/>
      </div>
      <div class="flex items-center gap-4 mb-8">
        <label for="email" class="font-semibold w-24">Email</label>
        <InputText id="email" class="flex-auto" autocomplete="off"/>
      </div>
      <div class="flex justify-end gap-2">
        <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
        <Button type="button" label="Save" @click="visible = false"></Button>
      </div>
    </Drawer>

  </div>
</template>

<script setup lang='ts'>
import {useProfessionalServices as items} from "~/composables/useProfessionalServices";

const product = reactive({
  category: '',
  subcategory: '',
  name: '',
})

const visible = ref(false)

const handleClick = (item: RentingListItem) => {
  if (!item.items) {
    product.name = item.label;

    const subCategory = items.find((cat) =>
        cat.items?.some((sub) =>
            sub.items?.some((prod) => prod.label === item.label)
        )
    );

    if (subCategory) {
      product.category = subCategory.label;

      const foundSubCategory = subCategory.items.find((sub) =>
          sub.items?.some((prod) => prod.label === item.label)
      );

      if (foundSubCategory) {
        product.subcategory = foundSubCategory.label;
      }
    }

    navigateTo({
      path: `/renting/${product.category}`,
      query: {
        category: product.category,
        subcategory: product.subcategory,
        name: product.name,
      },
    });
  }
};

</script>