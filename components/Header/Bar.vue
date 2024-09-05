<template>
  <div class="flex justify-between gap-4 items-center max-w-[1255px] px-[20px] mx-auto py-[50px]">
    <router-link to="/">
      <NuxtImg
          src="/logo.png"
          alt="GLD Logo"
          class="w-[62px] h-[41px]"
      />
    </router-link>
    <InputText
        placeholder="Search"
        class="w-full max-w-[540px]"
    />
    <Select
        :disabled="true"
        v-model="selectedLanguage"
        :options="languages"
        optionLabel="name"
        placeholder="Select a Language"
        class="[&>span]:max-w-[120px] w-full max-w-[140px]"
    />
  </div>
</template>

<script setup lang="ts">
const selectedLanguage = ref({name: 'English', code: 'en'});

const languages = ref([
  {name: 'English', code: 'en'},
  {name: 'Spanish', code: 'es'},
  {name: 'French', code: 'fr'},
  {name: 'German', code: 'de'},
  {name: 'Chinese', code: 'zh'}
]);
</script>