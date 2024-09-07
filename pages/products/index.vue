<template>
  <div class="max-w-[1255px] pb-[50px] sm:pb-[130px] px-[20px] justify-center items-center mx-auto">
    <h1 class='text-[36px] mt-[25px] flex-wrap justify-center mb-[50px] leading-0 font-medium flex gap-x-2'>
      Select
      <span class='uppercase text-[#02A0A0] text-center'>products</span>
      Category
    </h1>
    <div class='flex flex-wrap justify-center w-full gap-[10px]'>
      <router-link v-for="category in categories" :to='category.link' :key='category.link'
                   class='md:max-w-[306px] cursor-pointer hover:bg-gray-200 transition-all justify-between w-full p-[25px] bg-[#F3F3F3] flex flex-col items-center'>
        <div class='max-h-[170px]'>
          <img :src='category.image' :alt='category.title' class='w-[100%] h-[100%] object-cover'/>
        </div>
        <div class='flex-col items-center flex gap-[10px]'>
          <h2 class='text-[20px] mt-[10px]'>{{ category.title }}</h2>
          <span class='text-[14px] text-[#A8ACB0]'>{{ category.count }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = [
  {
    category: 'beauty',
    title: "Beauty of Skin",
    image: '/img/products/buyer/beauty-of-skin.png',
    count: "2 products",
    link: '/products/beauty'
  },
  {category: 'bags', title: "Bags", image: '/img/products/buyer/bags.png', count: "2 products", link: '/products/bags'},
  {
    category: 'awesome',
    title: "Awesome Lip Care",
    image: '/img/products/buyer/awesome-lip-care.png',
    count: "2 products",
    link: '/products/awesome'
  },
  {
    category: 'mobileTablets',
    title: "Mobile Tablets",
    image: '/img/products/buyer/mobile-tablets.png',
    count: "2 products",
    link: '/products/mobileTablets'
  },
  {
    category: 'necklaces',
    title: "Necklaces",
    image: '/img/products/buyer/necklaces.png',
    count: "2 products",
    link: '/products/necklaces'
  },
  {
    category: 'clothing',
    title: "Clothing",
    image: '/img/products/buyer/clothing.png',
    count: "2 products",
    link: '/products/clothing'
  },
  {
    category: 'bluetooth',
    title: "Bluetooth",
    image: '/img/products/buyer/bluetooth.png',
    count: "2 products",
    link: '/products/bluetooth'
  },
  {
    category: 'facial',
    title: "Facial Care",
    image: '/img/products/buyer/facial-care.png',
    count: "2 products",
    link: '/products/facial'
  },
  {
    category: 'shoes',
    title: "Shoes",
    image: '/img/products/buyer/shoes.png',
    count: "2 products",
    link: '/products/shoes'
  },
  {category: 'cpu', title: "CPU", image: '/img/products/buyer/cpu.png', count: "2 products", link: '/products/cpu'},
  {
    category: 'discover',
    title: "Discover Skincare",
    image: '/img/products/buyer/discover-skincare.png',
    count: "2 products",
    link: '/products/discover'
  },
  {
    category: 'headphones',
    title: "Headphones",
    image: '/img/products/buyer/headphones.png',
    count: "3 products",
    link: '/products/headphones'
  },
  {
    category: 'bracelets',
    title: "Bracelets",
    image: '/img/products/buyer/bracelets.png',
    count: "3 products",
    link: '/products/bracelets'
  },
  {
    category: 'smartwatch',
    title: "Smart Watch",
    image: '/img/products/buyer/smart-watch.png',
    count: "3 products",
    link: '/products/smartwatch'
  },
  {
    category: 'earrings',
    title: "Earrings",
    image: '/img/products/buyer/earrings.png',
    count: "3 products",
    link: '/products/earrings'
  },
]
</script>