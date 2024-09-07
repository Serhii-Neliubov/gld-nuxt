<template>
  <div class="max-w-[1240px] pb-[50px] sm:pb-[130px] px-[20px] justify-center items-center mx-auto">
    <h1 class='text-[36px] mt-[25px] flex-wrap justify-center mb-[50px] leading-0 font-medium flex gap-x-2'>
      Select
      <span class='uppercase text-[#02A0A0] text-center'>professional services</span>
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
    name: "Cleaning",
    image: '/img/professional-services/buyer/cleaning.png',
    link: '/professional-services/cleaning',
  },
  {
    name: "Repairing",
    image: '/img/professional-services/buyer/repairing.png',
    link: '/professional-services/repairing',
  },
  {
    name: "Gardening",
    image: '/img/professional-services/buyer/gardening.png',
    link: '/professional-services/gardening',
  },
  {
    name: "Tree Cutting",
    image: '/img/professional-services/buyer/tree-cutting.png',
    link: '/professional-services/tree-cutting',
  },
  {
    name: "Lawn Services",
    image: '/img/professional-services/buyer/lawn-services.png',
    link: "/professional-services/lawn-services",
  },
  {
    name: "Handyman",
    image: '/img/professional-services/buyer/handyman.png',
    link: "/professional-services/handyman",
  },
  {
    name: "Snow Removal",
    image: '/img/professional-services/buyer/snow-removal.png',
    link: "/professional-services/snow-removal",
  },
  {
    name: "Pest Control",
    image: '/img/professional-services/buyer/pest-control.png',
    link: "/professional-services/pest-control",
  },
  {
    name: "Electrical",
    image: '/img/professional-services/buyer/electrical.png',
    link: "/professional-services/electrical",
  },
]
</script>