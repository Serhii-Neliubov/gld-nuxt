import {LoginRequest} from "~/api/auth/requests/LoginRequest";
import {RegistrationRequest} from "~/api/auth/requests/RegistrationRequest";
import {GetUserRequest} from "~/api/auth/requests/GetUserRequest";
import {GoogleAuthRequest} from '~/api/auth/requests/GoogleAuthRequest';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null as User | null,
        tokens: null as Tokens | null,
    }),
    getters: {},
    actions: {
        async login(data: { email: string, password: string }) {
            const response = await LoginRequest(data);

            if (!response.accessToken || !response.user) {
                return;
            }

            const accessToken = useCookie<string>('accessToken');
            accessToken.value = response.accessToken

            this.user = response.user;
        },

        async register(data: { name: string, role: string, email: string, password: string }) {
            const response = await RegistrationRequest(data);

            if (!response.accessToken || !response.user) {
                return;
            }

            const accessToken = useCookie<string>('accessToken');
            accessToken.value = response.accessToken

            this.user = response.user;
        },

        async googleAuth(userType?: string): Promise<string> {
            return await GoogleAuthRequest(userType);
        },

        async getUser() {
            const response = await GetUserRequest();

            if (!response.accessToken || !response.user) {
                return;
            }

            const accessToken = useCookie<string>('accessToken');
            accessToken.value = response.accessToken

            this.user = response.user;
        },

        async logout() {
            const accessToken = useCookie<string>('accessToken');
            accessToken.value = ''

            this.user = null

            navigateTo('/');
        },
    },
})