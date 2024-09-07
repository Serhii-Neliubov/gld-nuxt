export default defineNuxtRouteMiddleware((to, from) => {
    const userStore = useUserStore();
    const user = computed(() => userStore.user);

    if (!user.value) {
        return navigateTo('/login');
    }
});