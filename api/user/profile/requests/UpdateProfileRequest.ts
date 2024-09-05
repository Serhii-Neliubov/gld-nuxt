import {useAPI} from "~/composables/useAPI";

export async function UpdateProfileRequest(userId: string, profileData: Profile): Promise<void> {
    await useAPI(`/profile/${userId}/personal-details`, {
        method: 'PUT',
        body: profileData,
    });
}