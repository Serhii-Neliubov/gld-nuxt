import type {FetchOptions} from 'ofetch'
import {useHeaders} from "~/composables/useHeaders";

export async function authorization(options: FetchOptions) {
    const accessToken = useCookie('refreshToken')

    const {setHeaders} = useHeaders()

    setHeaders((options), [
        {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            credentials: 'include'
        },
    ])

    if (accessToken.value) {
        setHeaders(options, [
            {'set-cookie': `refreshToken=${accessToken.value}`},
        ])
    }
}

// export async function refreshAuthorization(response: Response) {
//     const refreshToken = useCookie('refreshToken')
//
//     if (response.status === 401) {
//         if (refreshToken.value)
//             await useUserStore().refreshTokens(refreshToken.value)
//     }
// }
