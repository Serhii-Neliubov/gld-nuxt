<template>
  <div class="max-w-[1255px] mx-auto py-10 px-[20px]">
    <div
        class="border-2 border-dashed rounded-md flex items-center justify-center h-[640px]">
      <div class="flex flex-col items-center gap-3">
        <h1 class="font-semibold text-4xl">No Items Found</h1>
        <router-link to="/products">
          <Button label="Submit" class="!bg-black !border-none">Continue Shipping</Button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
useSeoMeta({
  title: 'Cart | Gldcart',
  ogTitle: 'Cart | Gldcart',
  description: 'Browse our selection of products and add your favorites to your shopping cart for easy access and future purchases.',
  ogDescription: 'Browse our selection of products and add your favorites to your shopping cart for easy access and future purchases.',
})

definePageMeta({middleware: ['auth']})
</script>