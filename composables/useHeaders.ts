import type { FetchOptions } from 'ofetch'

export function useHeaders() {
    const setHeaders = (options: FetchOptions, newHeaders: { [key: string]: string }[]) => {
        const headers = options.headers ||= {}

        for (const header of newHeaders) {
            if (Array.isArray(headers)) {
                for (const key in header) {
                    headers.push([key, header[key]])
                }
            } else if (headers instanceof Headers) {
                for (const key in header) {
                    headers.set(key, header[key])
                }
            } else {
                for (const key in header) {
                    headers[key] = header[key]
                }
            }
        }
    }

    return  { setHeaders }
}
