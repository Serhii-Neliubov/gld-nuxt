import type {FetchOptions} from 'ofetch'
import {useHeaders} from "~/composables/useHeaders";

export async function authorization(options: FetchOptions) {
    const accessToken = useCookie('token')

    const {setHeaders} = useHeaders()

    setHeaders((options), [
        {
            'Accept': 'application/json',
        },
    ])

    if (accessToken.value) {
        setHeaders(options, [
            {'Authorization': `Bearer ${accessToken.value}`},
        ])
    }
}