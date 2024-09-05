import {useAPI} from "~/composables/useAPI";

export async function AddAddressRequest(userId: string, address: Address): Promise<void> {
    await useAPI(`/profile/${userId}/shipping-address`, {
        method: 'POST',
        body: address,
    });
}
