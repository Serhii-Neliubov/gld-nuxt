<template>
  <div class="py-[50px] mx-auto max-w-[1255px] px-[20px]">
    <h1 class="text-center mb-[45px] text-[36px]">
      Select <span class="text-[#02A0A0]">RENTING</span> Category
    </h1>

    <div class="p-5 rounded-md shadow-2xl lg:min-h-[800px] bg-white border-gray-200 border-[1px]">
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
  </div>
</template>

<script setup lang='ts'>
import {useRenting as items} from "~/composables/useRenting";

useSeoMeta({
  title: 'Renting | Gldcart',
  ogTitle: 'Renting | Gldcart',
  description: 'Renting the products - that you need for a short period of time - is a great way to save money and reduce waste',
  ogDescription: 'Renting the products - that you need for a short period of time - is a great way to save money and reduce waste',
})

definePageMeta({middleware: ['auth']})

const product = reactive({
  category: '',
  subcategory: '',
  name: '',
})

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
      path: `/renting/vendor/${product.category}`,
      query: {
        category: product.category,
        subcategory: product.subcategory,
        name: product.name,
      },
    });
  }
};

</script>