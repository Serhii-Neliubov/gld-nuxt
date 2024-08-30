import {useUserStore} from "~/stores/useUserStore";
import {authRouteNames} from "~/api/interceptors/auth";

export default defineNuxtRouteMiddleware((to) => {
    const userStore = useUserStore()
    const accessToken = useCookie('accessToken')
    const refreshToken = useCookie('refreshToken')

    if (!userStore.user && accessToken.value && !authRouteNames.includes(to.name as string)) {
        userStore.getUser()
    }
    if (!userStore.user && !accessToken.value) {
        userStore.getUser()
    }

    if (!userStore.user && !accessToken.value && !refreshToken.value) {
        if (to.path !== '/login') {
            return navigateTo({
                name: 'login',
                query: {redirect: to.path},
            })
        }
    }
})
