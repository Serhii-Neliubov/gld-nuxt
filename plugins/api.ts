import type {FetchContext} from 'ofetch'
import {authorization} from "~/api/interceptors/auth";

export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig()

    const api = $fetch.create({
        baseURL: runtimeConfig.public.API_URL as string,

        async onRequest({options}: FetchContext) {
            await authorization(options)
        },
        async onResponseError({response}: { response: Response }) {
            // await refreshAuthorization(response)
        },
    })

    // Expose to useNuxtApp().$api
    return {provide: {api}}
})
