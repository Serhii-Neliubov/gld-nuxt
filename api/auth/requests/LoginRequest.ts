export async function LoginRequest(data: { email: string, password: string }): Promise<AuthResponse> {
    return await useAPI<AuthResponse>('/auth/login', {
        method: 'POST',
        body: data
    })
}
