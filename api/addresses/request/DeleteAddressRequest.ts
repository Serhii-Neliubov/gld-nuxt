export async function DeleteAddressRequest(userId: string, addressId: string): Promise<void> {
    await useAPI(`/profile/${userId}/shipping-address/${addressId}`, {
        method: 'DELETE',
    })
}
