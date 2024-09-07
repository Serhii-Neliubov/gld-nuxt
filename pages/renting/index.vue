<template>
  <div class="max-w-[1240px] pb-[50px] sm:pb-[130px] px-[20px] justify-center items-center mx-auto">
    <h1 class='text-[36px] mt-[25px] flex-wrap justify-center mb-[50px] leading-0 font-medium flex gap-x-2'>
      Select
      <span class='uppercase text-[#02A0A0] text-center'>renting</span>
      Category
    </h1>
    <div class='flex flex-wrap gap-[40px] justify-center'>
      <router-link v-for="category in categories" :key='category.name' :to='category.link'
                   class='bg-[#F2F2F2] w-full min-[846px]:max-w-[350px] rounded-[15px] flex flex-col justify-center items-center gap-[10px] p-[15px]'>
        <div
            class='min-[350px]:h-[250px] min-[400px]:h-[326px] h-[200px] w-full px-[20px] rounded-[15px] flex items-center justify-center  bg-white'>
          <img :src='category.image' alt="Image" class='max-h-[200px]'/>
        </div>
        <span class='mb-[5px] text-[24px] sm:text-[32px] font-medium'>{{ category.name }}</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = [
  {
    name: 'Vehicles',
    image: '/img/renting/buyer/vehicles.png',
    link: '/renting/vehicles'
  },
  {
    name: 'Houses',
    image: '/img/renting/buyer/houses.png',
    link: '/renting/houses'
  },
  {
    name: 'Electronics',
    image: '/img/renting/buyer/electronics.png',
    link: '/renting/electronics'
  }
]
</script>