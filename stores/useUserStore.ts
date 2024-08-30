import {LoginRequest} from "~/api/auth/requests/LoginRequest";
import {RegistrationRequest} from "~/api/auth/requests/RegistrationRequest";
import {GetUserRequest} from "~/api/auth/requests/GetUserRequest";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null as User | null,
        tokens: null as Tokens | null,
    }),
    getters: {},
    actions: {
        async login(data: { email: string, password: string }) {
            const response = await LoginRequest(data);

            const accessToken = useCookie<string>('accessToken');
            accessToken.value = response.accessToken

            this.user = response.user;
        },

        async register(data: { name: string, role: string, email: string, password: string }) {
            const response = await RegistrationRequest(data);

            const accessToken = useCookie<string>('accessToken');
            accessToken.value = response.accessToken

            this.user = response.user;
        },

        async getUser() {
            await GetUserRequest()
        },

        logout() {
            const accessToken = useCookie('accessToken');
            accessToken.value = null;

            this.user = null

            navigateTo('/');
        },

        async refreshTokens(refreshToken: string) {
            try {
                // TODO: Do refresh token request
                // const tokens = await refreshTokenRequest(refreshToken)
                const tokens = {
                    accessToken: 'newAccessToken',
                    refreshToken: 'newRefresh'
                }

                await this.setTokens(tokens)
            } catch (error) {
                await this.clearTokens()
                await navigateTo('/login')
                throw error
            }
        },

        setTokensInCookies(tokens: Tokens) {
            const accessToken = useCookie<string>('accessToken')
            const refreshToken = useCookie<string>('refreshToken')

            accessToken.value = tokens.accessToken as string
            refreshToken.value = tokens.refreshToken as string
        },

        async setTokens(tokens: Tokens) {
            this.tokens = tokens

            this.setTokensInCookies(tokens)
        },

        async clearTokens() {
            const clearedTokens = {
                accessToken: null,
                refreshToken: null,
            }

            await this.setTokens(clearedTokens)
        },
    },
})