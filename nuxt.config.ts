// https://nuxt.com/docs/api/configuration/nuxt-config
import Lara from '@primevue/themes/lara';

export default defineNuxtConfig({
    ssr: false,
    runtimeConfig: {
        public: {
            API_URL: process.env.API_URL || ''
        }
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
        '@primevue/nuxt-module',
        '@pinia/nuxt',
        '@nuxt/image',
    ],
    css: ['primeicons/primeicons.css'],
    primevue: {
        options: {
            theme: {
                preset: Lara
            }
        }
    },
})