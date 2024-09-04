export async function RegistrationRequest(data: {
    name: string,
    role: string,
    email: string,
    password: string
}): Promise<AuthResponse> {
    return await useAPI<AuthResponse>('/auth/register', {
        credentials: 'include',
        method: 'POST',
        body: data
    })
}
