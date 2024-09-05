export async function ChangePasswordRequest(userId: string, password: string): Promise<void> {
    await useAPI(`/profile/${userId}/personal-details`, {
        method: 'POST',
        body: password,
    })
}