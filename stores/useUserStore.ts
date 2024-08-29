interface UserState {
}

export const useUserStore = defineStore('user', {
    state: (): UserState => ({}),
    getters: {},
    actions: {
        login() {
        },
        register() {
        },
        checkAuth() {
        },
        logout() {
        },
    },
})