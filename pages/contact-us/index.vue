<template>
  <div class='bg-[#ecf2f7]'>
    <div class='mx-auto max-w-[1240px] drop-shadow-2xl pb-[50px] px-[20px]'>
      <div class='flex flex-col justify-center items-center text-center'>
        <h1 class='sm:text-[44px] mt-[25px] min-[470px]:text-[35px] text-[22px] text-center font-poppins font-light mb-[5px] sm:mb-[+ťpx]'>
          Keep In Touch with Us</h1>
        <Breadcrumb :model="items" style="background: none">
          <template #item="{ item, props }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
              <a :href="href" v-bind="props.action" @click="navigate">
                <span :class="[item.icon, 'text-color']"/>
                <span class="hover:text-black transition-all">{{ item.label }}</span>
              </a>
            </router-link>
            <a v-else :href="item.url" :target="item.target" v-bind="props.action">
              <span class="text-surface-700 dark:text-surface-0">{{ item.label }}</span>
            </a>
          </template>
        </Breadcrumb>

      </div>
      <div
          class='flex flex-wrap md:flex-nowrap gap-10 justify-between items-center bg-white rounded-md py-[25px] md:py-[50px] px-[30px] md:px-[60px]'>
        <div class='w-full'>
          <form class='max-w-[720px]' @submit.prevent="onSubmit">
            <h2 class='md:text-[30px] text-[20px] mb-[20px] font-medium'>Sent A Message</h2>
            <div class='flex flex-col gap-3'>
              <InputText
                  placeholder='Name'
                  v-model='contactData.name'
                  :invalid='errors.includes("name")'
              />
              <InputText
                  placeholder='Email'
                  v-model='contactData.email'
                  :invalid='errors.includes("email")'
                  type='email'
              />
              <InputText
                  placeholder='Subject'
                  v-model='contactData.subject'
                  :invalid='errors.includes("subject")'
              />
              <Textarea
                  placeholder='Message'
                  v-model='contactData.message'
                  class='min-h-[200px]'
                  :invalid='errors.includes("message")'
              />
            </div>
            <div class="flex my-4 items-center">
              <Checkbox v-model="saveUserData" inputId="saveData" :binary="true"/>
              <label for="saveData" class="cursor-pointer ml-2">
                Save my name, email in this browser for the next time I comment.
              </label>
            </div>
            <button
                :disabled='loading'
                type='submit'
                class='text-white disabled:bg-gray-700 rounded-md hover:bg-[#021B32] transition-all bg-black w-full md:max-w-[200px] py-[15px] text-[16px]'
            >
              <template v-if="loading">
                <InputIcon class="pi pi-spin pi-spinner mr-1"/>
                Sending...
              </template>
              <template v-else>
                Send Message
              </template>
            </button>
          </form>
        </div>
        <div class='flex flex-col gap-10 w-full md:max-w-[205px]'>
          <div class='text-center lg:text-left flex justify-center md:items-start items-center flex-col gap-2'>
            <NuxtImg class='w-[40px]' src='' alt="Icon"/>
            <a href='mailto:contact@Gldcard.com'>contact@Gldcard.com</a>
            <a href='tel:4065550120'>406 555-0120</a>
          </div>
          <div class='text-center lg:text-left flex justify-center md:items-start items-center flex-col gap-2'>
            <NuxtImg class='w-[40px]' src='' alt="Icon"/>
            <span class='text-left'>6391 Elgin St. Celina, Delaware 10299</span>
          </div>
          <div class='text-center lg:text-left flex justify-center md:items-start items-center flex-col gap-4'>
            <NuxtImg class='w-[40px]' src='' alt="Icon"/>
            <span>Find on social media</span>
            <div class='flex md:gap-0 gap-2'>
              <a href="#"
                 class='w-[38px] h-[38px] flex justify-center items-center border-[1px] border-solid border-[#E6E7E8]'>
                <NuxtImg src='' alt='Social image'/>
              </a>
              <a href="#"
                 class='w-[38px] h-[38px] flex justify-center items-center border-[1px] border-solid border-[#E6E7E8]'>
                <NuxtImg src='' alt='Social image'/>
              </a>
              <a href="#"
                 class='w-[38px] h-[38px] flex justify-center items-center border-[1px] border-solid border-[#E6E7E8]'>
                <NuxtImg src='' alt='Social image'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {validate} from "~/composables/useValidation";
import {useAPI} from "~/composables/useAPI";

const items = ref([
  {label: 'Home', route: '/'},
  {label: 'Contact us', route: '/contact-us'},
]);

const toast = useToast();

const saveUserData = ref<boolean>(false);
const loading = ref<boolean>(false);
const errors = ref<string[]>([]);

const contactData = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

onMounted(() => {
  const data = localStorage.getItem('contact_data');

  if (data) {
    const {storageName, storageEmail} = JSON.parse(data);

    contactData.name = storageName;
    contactData.email = storageEmail;

    saveUserData.value = true;
  }
});

const onSubmit = async () => {
  if (saveUserData.value) {
    saveContactInformation();
  } else {
    localStorage.removeItem('contact_data');
  }

  errors.value = validate(contactData);

  if (errors.value.length) {
    return toast.add({
      severity: 'error',
      summary: 'Error Message',
      detail: 'If you want to contact us you need to fill all fields correctly!',
      life: 3000
    });
  }

  try {
    loading.value = true;

    await useAPI('/emails/contact-us', {
      method: 'POST',
      body: contactData,
    });
  } catch (e) {
    console.log(e)
  } finally {
    errors.value = [];
    loading.value = false;
  }
};

const saveContactInformation = () => {
  if (!contactData.name || !contactData.email) {
    saveUserData.value = false;

    return toast.add({
      severity: 'warn',
      summary: 'Warn Message',
      detail: 'If you want to save your contact information you need to fill "Name" and "Email" fields!',
      life: 3000
    });
  }

  localStorage.setItem('contact_data', JSON.stringify({
    storageName: contactData.name,
    storageEmail: contactData.email,
  }));
};

</script>