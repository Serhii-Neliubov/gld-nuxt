export async function LoginRequest(data: { email: string, password: string }): Promise<AuthResponse> {
    return await useAPI<AuthResponse>('/auth/login', {
        credentials: 'include',
        method: 'POST',
        body: data
    })
}
