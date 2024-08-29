import type {FetchContext} from 'ofetch'

export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig()

    const api = $fetch.create({
        baseURL: runtimeConfig.public.API_URL as string,

        async onRequest({request, options}: FetchContext) {
            // await authorization(options)
            // await signedRequest(request, options)
        },
        async onResponseError({response}: { response: Response }) {
            // await refreshAuthorization(response)
        },
        // async onResponse({
        //                      request,
        //                      options,
        //                      response,
        //                  }: { request: string, options: FetchOptions, response: Response }) {
        //     await twoFactorAuthenticationCheck(request, options, response)
        // },
    })

    // Expose to useNuxtApp().$api
    return {provide: {api}}
})
