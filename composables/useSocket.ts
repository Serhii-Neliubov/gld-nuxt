import {io, Socket} from 'socket.io-client';

const runtimeConfig = useRuntimeConfig();

let socket: Socket | null = null;

export default function useSocket() {
    const accessToken = localStorage.getItem('token');

    if (socket) {
        return socket;
    }

    socket = io(`${runtimeConfig.public.BASE_URL}/chat`, {query: {accessToken}});
    socket.connect();

    return socket;
}