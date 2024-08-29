// https://nuxt.com/docs/api/configuration/nuxt-config
import Lara from '@primevue/themes/lara';

export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiBase: process.env.API_URL || ''
        }
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
        '@primevue/nuxt-module'
    ],
    css: ['primeicons/primeicons.css'],
    primevue: {
        options: {
            theme: {
                preset: Lara
            }
        }
    }
})
