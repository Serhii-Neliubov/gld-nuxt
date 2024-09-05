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
               @click="handleClick(item)">
              <span :class="item.icon"/>
              <span class="ml-2">{{ item.label }}</span>
              <i v-if="hasSubmenu" class="pi pi-angle-right ml-auto"></i>
            </a>
          </template>
        </TieredMenu>
      </div>
    </div>

    <Drawer
        v-model:visible="visible"
        position="right"
        modal
        :header="product.category + ' Form'"
        class="!w-full md:!w-[30rem]"
    >
      <Stepper
          value="1"
          v-if="product.category === 'Vehicles'"
          linear
      >
        <StepItem value="1">
          <Step>Basic Information</Step>
          <StepPanel v-slot="{ activateCallback }">
            <div class="flex flex-col">
              <div
                  class="border-2 flex-col gap-4 border-dashed border-surface-200 dark:border-surface-700 rounded-lg bg-surface-50 dark:bg-surface-950 flex-auto flex p-5 font-medium">
                <InputText type="text" v-model="value" placeholder="title" class="h-fit w-full"/>
                <Textarea v-model="value" autoResize class="min-h-[200px]" placeholder="Description"/>
                <div class="flex flex-wrap gap-4">
                  <div class="flex items-center">
                    <RadioButton v-model="ingredient" inputId="ingredient3" name="pizza" value="Pepper"/>
                    <label for="ingredient3" class="ml-2">With Driver</label>
                  </div>
                  <div class="flex items-center">
                    <RadioButton v-model="ingredient" inputId="ingredient4" name="pizza" value="Onion"/>
                    <label for="ingredient4" class="ml-2">Without Driver</label>
                  </div>
                </div>
                <div class="flex gap-4 mt-4 w-full flex-col">
                  <div class="flex items-center">
                    <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese"/>
                    <label for="ingredient1" class="ml-2"> Packages for Days </label>
                  </div>
                  <div class="flex gap-4">
                    <InputNumber v-model="value1" inputId="currency-us" mode="currency" currency="USD" locale="en-US"
                                 fluid placeholder="Rent price"/>
                    <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Day"
                            class="w-full md:w-56"/>
                  </div>
                </div>
                <div class="flex gap-4 mt-4 w-full flex-col">
                  <div class="flex items-center">
                    <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese"/>
                    <label for="ingredient1" class="ml-2"> Packages for Weeks </label>
                  </div>
                  <div class="flex gap-4">
                    <InputNumber v-model="value1" inputId="currency-us" mode="currency" currency="USD" locale="en-US"
                                 fluid placeholder="Rent price"/>
                    <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Week"
                            class="w-full md:w-56"/>
                  </div>
                </div>
                <div class="flex gap-4 mt-4 w-full flex-col">
                  <div class="flex items-center">
                    <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese"/>
                    <label for="ingredient1" class="ml-2"> Packages for Months </label>
                  </div>
                  <div class="flex gap-4">
                    <InputNumber v-model="value1" inputId="currency-us" mode="currency" currency="USD" locale="en-US"
                                 fluid placeholder="Rent price"/>
                    <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Month"
                            class="w-full md:w-56"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="py-6">
              <Button label="Next" @click="activateCallback('2')"/>
            </div>
          </StepPanel>
        </StepItem>
        <StepItem value="2">
          <Step>Photo & video</Step>
          <StepPanel v-slot="{ activateCallback }">
            <div class="flex flex-col h-48">
              <div
                  class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                Content II
              </div>
            </div>
            <div class="flex py-6 gap-2">
              <Button label="Back" severity="secondary" @click="activateCallback('1')"/>
              <Button label="Next" @click="activateCallback('3')"/>
            </div>
          </StepPanel>
        </StepItem>
        <StepItem value="3">
          <Step>Specifications</Step>
          <StepPanel v-slot="{ activateCallback }">
            <div class="flex flex-col">
              <div
                  class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex flex-col gap-3 p-5 font-medium">
                <InputText type="text" v-model="value" placeholder="Car manufacture year" class="h-fit w-full"/>
                <InputText type="text" v-model="value" placeholder="Vehicle plate number" class="h-fit w-full"/>
                <div class="flex flex-wrap gap-4">
                  <div class="flex items-center">
                    <RadioButton v-model="ingredient" inputId="ingredient3" name="pizza" value="Pepper"/>
                    <label for="ingredient3" class="ml-2">New vehicle</label>
                  </div>
                  <div class="flex items-center">
                    <RadioButton v-model="ingredient" inputId="ingredient4" name="pizza" value="Onion"/>
                    <label for="ingredient4" class="ml-2">Used vehicle</label>
                  </div>
                </div>
                <InputText type="text" v-model="value" placeholder="Custom specification" class="h-fit w-full"/>
                <InputText type="text" v-model="value" placeholder="Specification details" class="h-fit w-full"/>
                <InputText type="text" v-model="value" placeholder="Fuel type" class="h-fit w-full"/>
                <InputText type="text" v-model="value" placeholder="Engine capacity" class="h-fit w-full"/>
                <InputText type="text" v-model="value" placeholder="Seat capacity" class="h-fit w-full"/>
                <InputText type="text" v-model="value" placeholder="Storage bag capacity" class="h-fit w-full"/>
                <InputText type="text" v-model="value" placeholder="Air bags" class="h-fit w-full"/>
              </div>
            </div>
            <div class="flex py-6 gap-2">
              <Button label="Back" severity="secondary" @click="activateCallback('2')"/>
              <Button label="Next" @click="activateCallback('4')"/>
            </div>
          </StepPanel>
        </StepItem>
        <StepItem value="4">
          <Step>Publish</Step>
          <StepPanel v-slot="{ activateCallback }">
            <div class="flex flex-col h-48">
              <div
                  class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                Content III
              </div>
            </div>
            <div class="py-6">
              <Button label="Back" severity="secondary" @click="activateCallback('3')"/>
            </div>
          </StepPanel>
        </StepItem>
      </Stepper>
    </Drawer>

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

const product = reactive({
  category: '',
  subcategory: '',
  name: '',
})

const visible = ref(false)

const handleClick = (item) => {
  if (!item.items) {
    product.name = item.label;
    visible.value = true;

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
  }
};

</script>