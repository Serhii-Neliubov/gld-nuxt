import {useUserStore} from "~/stores/useUserStore";

export default defineNuxtRouteMiddleware(() => {
    const userStore = useUserStore();

    if (userStore.user) {
        return;
    }

    return navigateTo('/login');
});
