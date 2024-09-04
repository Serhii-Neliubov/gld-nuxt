import type {FetchOptions} from 'ofetch'
import {useHeaders} from "~/composables/useHeaders";

export async function authorization(options: FetchOptions) {
    const token = localStorage.getItem('token')

    const {setHeaders} = useHeaders()

    setHeaders((options), [
        {
            'Accept': 'application/json',
        },
    ])

    if (token) {
        setHeaders(options, [
            {'Authorization': `Bearer ${token}`},
        ])
    }
}