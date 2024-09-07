export function GoogleAuthRequest(userType: string = '') {
    const runtimeConfig = useRuntimeConfig();

    const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const options = {
        redirect_uri: `${runtimeConfig.public.API_URL}/tokens/oauth/google`,
        client_id: runtimeConfig.public.GOOGLE_CLIENT_ID as string,
        access_type: "offline",
        response_type: "code",
        prompt: "consent",
        state: userType,
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
        ].join(" "),
    };

    const qs = new URLSearchParams(options);

    return `${rootUrl}?${qs.toString()}`;
}
