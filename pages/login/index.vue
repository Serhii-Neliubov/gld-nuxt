<template>
  <div class='max-w-[1240px] relative mx-auto px-[20px] py-[140px] flex justify-center items-center'>
    <div
        class='w-[590px] z-10 relative flex rounded-md flex-col items-center justify-center h-fit bg-white sm:drop-shadow-2xl py-[30px] px-[35px] sm:py-[60px] sm:px-[70px]'>
      <h1 class='text-center mb-[10px] mt-0 text-[26px] sm:text-[30px] font-medium'>Login to Gldcart</h1>
      <div class='flex flex-wrap justify-center gap-2 items-center'>
        <p class='text-[#49535B]'>Don’t have an account?</p>
        <router-link to="/registration" class='text-[#0989FF] hover:underline'>Create a free account</router-link>
      </div>
      <a :href='redirectToGoogle()'
         class='cursor-pointer mt-[20px] sm:mt-[30px] px-[8px] flex gap-2 items-center border-solid w-fit border-[#DADCE0] hover:bg-gray-100 transition-all rounded py-[10px] justify-center border-2'>
        <i class="pi-google pi text-gray-500"/>
        <span class='text-[#3C4043] sm:text-[16px] text-[14px]'>
          Sign up with google
        </span>
      </a>
      <div
          class='after:absolute after:hidden min-[370px]:after:block flex justify-center w-full mt-[20px] sm:mt-[30px] relative after:w-full after:h-[1px] after:bg-gray-600 after:top-[60%] after:translate-y-[-50%] after:left-0'>
        <div class='text-[#49535B] relative z-10 w-fit px-[5px] text-center bg-white'>
          or Sign up with Email
        </div>
      </div>
      <div class='mt-[40px] flex flex-col gap-[10px] w-full'>
        <InputText
            placeholder='Gldcart@gmail.com'
            v-model='authData.email'
            :invalid='errors.includes("email")'
        />
        <Password
            placeholder='********'
            v-model='authData.password'
            class="[&>input]:w-full"
            :invalid='errors.includes("password")'
        />
      </div>
      <div class='flex flex-wrap gap-2 justify-between items-center w-full mt-[20px]'>
        <div class="flex my-4 items-center">
          <Checkbox v-model="isRemember" inputId="saveData" :binary="true"/>
          <label for="saveData" class="cursor-pointer ml-2">
            Remember me
          </label>
        </div>
        <router-link to="/forgot-password" class='text-[#0989FF] hover:underline'>Forgot Password?</router-link>
      </div>
      <button @click='onSubmit' class='text-white rounded-md bg-[#02A0A0] py-[13px] w-full mt-[20px]'>
        Login
      </button>
    </div>

    <NuxtImg src='/img/login/decor1.png'
             class='absolute hidden md:block bottom-[280px] left-0'/>
    <NuxtImg src='/img/login/decor2.png'
             class='absolute hidden md:block top-[140px] right-0'/>
    <NuxtImg src='/img/login/decor3.png'
             class='absolute top-[140px] left-[-200px]'/>
  </div>
</template>

<script setup lang='ts'>
import {validate} from "~/composables/useValidation";
import {useUserStore} from "~/stores/useUserStore";

useSeoMeta({
  title: 'Login | Gldcart',
  ogTitle: 'Login | Gldcart',
  description: 'Login to Gldcart',
  ogDescription: 'Login to Gldcart',
})

useHead({
  title: 'Gldcart | Login',
  meta: [
    {
      name: 'description',
      content: 'Login to Gldcart'
    }
  ],
})

const toast = useToast();
const userStore = useUserStore();

const loading = ref<boolean>(false);
const isRemember = ref<boolean>(false)
const errors = ref<string[]>([])
const authData = reactive({
  email: '',
  password: ''
})

const onSubmit = async () => {
  errors.value = validate(authData);

  if (errors.value.length) {
    return toast.add({
      severity: 'error',
      summary: 'Error Message',
      detail: 'If you want to login us you need to fill all fields correctly!',
      life: 3000
    });
  }

  try {
    loading.value = true;

    userStore.login(authData);
  } catch (e) {
    console.log(e)
  } finally {
    loading.value = false;
  }
}

function redirectToGoogle() {
  return userStore.googleAuth()
}
</script>