import {io, Socket} from 'socket.io-client';

const runtimeConfig = useRuntimeConfig();
const accessToken = useCookie('accessToken')

let socket: Socket | null = null;

export default function useSocket() {
    if (socket) {
        return socket;
    }

    socket = io(`${runtimeConfig.public.BASE_URL}/chat`, {query: {accessToken: accessToken.value}});
    socket.connect();

    return socket;
}