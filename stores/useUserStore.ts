import {useAPI} from "~/composables/interceptors";

interface UserState {
}

export const useUserStore = defineStore('user', {
    state: (): UserState => ({}),
    getters: {},
    actions: {
        async login(data: { email: string, password: string }) {
            await useAPI('/auth/login', {
                method: 'POST',
                body: data
            })
        },
        register() {
        },
        checkAuth() {
        },
        logout() {
        },
    },
})