import {io, Socket} from 'socket.io-client';

const runtimeConfig = useRuntimeConfig();

let socket: Socket | null = null;

export default function useSocket(token: string) {
    if (socket) {
        return socket;
    }

    socket = io(`${runtimeConfig.public.BASE_URL}/chat`, {query: {accessToken: token}});
    socket.connect();

    return socket;
}