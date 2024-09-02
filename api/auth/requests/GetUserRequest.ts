export async function GetUserRequest(): Promise<AuthResponse> {
    return await useAPI<AuthResponse>('/auth/refresh', {
        method: 'GET',
        credentials: 'include',
    })
}
