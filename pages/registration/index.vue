<template>
  <div class='max-w-[1240px] relative mx-auto px-[20px] py-[70px] sm:py-[140px] flex justify-center items-center'>
    <div
        class='w-[590px] z-10 relative flex rounded-md flex-col items-center justify-center h-fit bg-white sm:drop-shadow-2xl py-0 px-[35px] sm:py-[60px] sm:px-[70px]'>
      <div v-if="!authData?.role">
        <h1 class='text-center mb-[30px] mt-0 text-[26px] sm:text-[30px] font-medium'>Register As A</h1>
        <div class='max-w-[400px] mb-[50px] font-light text-center'>
          <p class='text-[#49535B]'>Join our platform and showcase your products and Services to a wide audience.
            Register
            now and embark on a journey of growth and success.</p>
        </div>
        <div class="flex flex-col gap-3 w-full items-center">
          <Button @click="setUserType('Vendor')" class="!max-w-[250px] text-xl font-semibold !border-none !w-full">
            Vendor
          </Button>
          <Button @click="setUserType('Buyer')"
                  class="!max-w-[250px] text-xl font-semibold !bg-blue-500 hover:!bg-blue-600 !border-none !w-full">
            Buyer
          </Button>
          <Button @click="setUserType('Rider')"
                  class="!max-w-[250px] text-xl font-semibold !bg-yellow-500 hover:!bg-yellow-600 !border-none !w-full">
            Rider
          </Button>
        </div>
      </div>
      <div v-else class="w-full flex flex-col items-center">
        <h1 class='text-center mb-[10px] mt-0 text-[26px] sm:text-[30px] font-medium'>Sign up to Gldcart</h1>
        <div class='flex flex-wrap justify-center gap-2 items-center'>
          <p class='text-[#49535B]'>Already have an account?</p>
          <router-link to="/login" class='text-[#0989FF] hover:underline'>Login</router-link>
        </div>
        <a :href='userStore.googleAuth()'
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
          <div class="flex items-center gap-2 w-full">
            <InputText
                placeholder='Name'
                v-model='authData.name'
                :invalid='errors.includes("name")'
                class="w-full"
            />
            <InputText
                placeholder='Surname'
                v-model='authData.surname'
                :invalid='errors.includes("surname")'
                class="w-full"
            />
          </div>
          <InputText
              placeholder='Email'
              v-model='authData.email'
              :invalid='errors.includes("email")'
          />
          <Password
              placeholder='Password'
              v-model='authData.password'
              class="[&>input]:w-full"
              :invalid='errors.includes("password")'
          />
          <Password
              placeholder='Confirm Password'
              v-model='authData.confirmPassword'
              class="[&>input]:w-full"
              :invalid='errors.includes("confirmPassword")'
          />
        </div>
        <div class='flex flex-wrap gap-2 justify-between items-center w-full mt-[20px]'>
          <div class="flex items-center">
            <Checkbox v-model="isRemember" inputId="saveData" :binary="true"/>
            <label for="saveData" class="cursor-pointer ml-2">
              Remember me
            </label>
          </div>
        </div>
        <button :disabled="loading" @click='onSubmit'
                class='text-white disabled:bg-teal-600 rounded-md bg-[#02A0A0] py-[13px] w-full mt-[20px]'>
          <template v-if="loading">
            <InputIcon class="pi pi-spin pi-spinner mr-1"/>
            Creating...
          </template>
          <template v-else>
            Create my account
          </template>
        </button>
      </div>
    </div>

    <NuxtImg src='/img/login/decor1.png'
             class='absolute hidden md:block bottom-[280px] left-0'/>
    <NuxtImg src='/img/login/decor2.png'
             class='absolute hidden md:block top-[140px] right-0'/>
    <NuxtImg src='/img/login/decor3.png'
             class='absolute top-[140px] left-[-200px]'/>
  </div>
</template>
<script setup lang="ts">
import {useUserStore} from "~/stores/useUserStore";
import {validate} from "~/composables/useValidation";

useHead({
  title: 'Gldcart | Registration',
  meta: [
    {
      name: 'description',
      content: 'Login to Gldcart'
    }
  ],
})

const userStore = useUserStore();
const toast = useToast();

const userType = ref<string | null>(null);

const loading = ref<boolean>(false);
const isRemember = ref<boolean>(false)
const errors = ref<string[]>([])
const authData = reactive({
  name: '',
  surname: '',
  email: '',
  role: userType.value as string,
  password: '',
  confirmPassword: ''
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

  if (authData.password !== authData.confirmPassword) {
    return toast.add({
      severity: 'error',
      summary: 'Error Message',
      detail: 'Passwords do not match!',
      life: 3000
    });
  }

  try {
    loading.value = true;

    await userStore.register(authData);
  } catch (e) {
    console.log(e)
  } finally {
    errors.value = [];
    loading.value = false;
  }
}

function setUserType(type: string) {
  authData.role = type;
}
</script>