export async function DeleteAddress(): Promise<AddressResponse> {
    return await useAPI<AddressResponse>('/auth/refresh', {
        method: 'GET',
    })
}
