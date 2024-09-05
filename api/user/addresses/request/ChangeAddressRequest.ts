export async function ChangeAddressRequest(userId: string, addressId: string, address: Address): Promise<void> {
    await useAPI(`/profile/${userId}/shipping-address/${addressId}`, {
        method: 'PUT',
        body: address
    })
}
