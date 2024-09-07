import {useUserStore} from "~/stores/useUserStore";

export default defineNuxtRouteMiddleware(async () => {
    const userStore = useUserStore();

    if (userStore.user) {
        return;
    }

    try {
        return await userStore.getUser();
    } catch (error) {
        console.error('Error:', error);
    }
});
