export async function GetAddressesRequest(id: string): Promise<Address[]> {
    return await useAPI<Address[]>(`/profile/${id}/shipping-addresses`, {
        method: 'GET',
    })
}
