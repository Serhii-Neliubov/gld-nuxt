import {useUserStore} from "~/stores/useUserStore";

export default defineNuxtRouteMiddleware(() => {
    const userStore = useUserStore()
    const accessToken = useCookie('refreshToken')

    if (!userStore.user || !accessToken.value) {
        userStore.getUser()
    }
})
