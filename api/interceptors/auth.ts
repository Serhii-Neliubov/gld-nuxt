import type {FetchOptions} from 'ofetch'
import {useUserStore} from "~/stores/useUserStore";

export async function authorization(options: FetchOptions) {
    const accessToken = useCookie('access_token')
    const runtimeConfig = useRuntimeConfig()
    const {setHeaders} = useHeaders()

    setHeaders(options, [
        {'Accept': 'application/json'},
    ])

    if (!runtimeConfig.public?.OLD_API) {
        setHeaders(options, [
            {'X-BrandId': runtimeConfig.public.BRAND_ID as string},
        ])
    }

    if (accessToken.value) {
        setHeaders(options, [
            {'Authorization': `Bearer ${accessToken.value}`},
        ])
    }
}

export async function refreshAuthorization(response: Response) {
    const refreshToken = useCookie('refresh_token')

    if (response.status === 401) {
        if (refreshToken.value)
            await useUserStore().refreshTokens(refreshToken.value)
    }
}

export const authRouteNames = [
    'login',
    'reset-password-token',
]
