interface AuthResponse {
    accessToken: string,
    user: {
        _id: string,
        name: string,
        email: string,
        role: string,
        stripe_cus_id: string
    }
}
