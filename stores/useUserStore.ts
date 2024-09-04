import {LoginRequest} from "~/api/auth/requests/LoginRequest";
import {RegistrationRequest} from "~/api/auth/requests/RegistrationRequest";
import {GetUserRequest} from "~/api/auth/requests/GetUserRequest";
import {GoogleAuthRequest} from '~/api/auth/requests/GoogleAuthRequest';
import {LogoutRequest} from "~/api/auth/requests/LogoutRequest";

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

            localStorage.setItem('token', response.accessToken);

            this.user = response.user;

            navigateTo('/')
        },

        async register(data: { name: string, role: string, email: string, password: string }) {
            const response = await RegistrationRequest(data);

            if (!response.accessToken || !response.user) {
                return;
            }

            localStorage.setItem('token', response.accessToken);

            this.user = response.user;

            navigateTo('/')
        },

        async googleAuth(userType?: string): Promise<string> {
            return await GoogleAuthRequest(userType);
        },

        async getUser() {
            const response = await GetUserRequest();

            if (!response.accessToken || !response.user) {
                return;
            }

            localStorage.setItem('token', response.accessToken);

            this.user = response.user;
        },

        async logout() {
            await LogoutRequest();

            localStorage.removeItem('token');

            this.user = null
            navigateTo('/login');
        },
    },
})