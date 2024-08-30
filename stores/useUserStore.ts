import {LoginRequest} from "~/api/auth/requests/LoginRequest";
import {RegistrationRequest} from "~/api/auth/requests/RegistrationRequest";

interface UserState {
    user: {
        _id: string | null,
        name: string | null,
        email: string | null,
        role: string | null,
        stripe_cus_id: string | null
    },
}

export const useUserStore = defineStore('user', {
    state: (): UserState => ({
        user: {
            _id: null,
            name: null,
            email: null,
            role: null,
            stripe_cus_id: null
        },
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

        getUser() {
            
        },

        logout() {
            const accessToken = useCookie('accessToken');
            accessToken.value = null;

            this.user = {
                _id: null,
                name: null,
                email: null,
                role: null,
                stripe_cus_id: null
            }

            navigateTo('/');
        },
    },
})