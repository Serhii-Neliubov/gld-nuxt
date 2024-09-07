// https://nuxt.com/docs/api/configuration/nuxt-config
import Lara from '@primevue/themes/lara';

export default defineNuxtConfig({
    ssr: false,
    runtimeConfig: {
        public: {
            API_URL: process.env.API_URL || '',
            BASE_URL: process.env.BASE_URL || '',
            STRIPE_KEY: process.env.STRIPE_PK || '',
            GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || '',
        }
    },
    nitro: {
        experimental: {
            websocket: true
        },
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