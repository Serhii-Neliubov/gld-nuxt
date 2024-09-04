<template>
  <div class="py-20 max-w-[1255px] px-[20px] mx-auto flex gap-10">
    <MegaMenu :model="participants" orientation="vertical" class="[&>ul]:!gap-4">
      <template #item="{ item }">
        <div @click="connectToChatHandler(item.id)" class="flex items-center gap-3 cursor-pointer">
          <Avatar :image="item.avatar" class="!rounded-full"/>
          <span>{{ item.label }}</span>
        </div>
      </template>
    </MegaMenu>
    <div class="bg-[#F8FAFC] w-full rounded-md p-5 flex justify-end flex-col">
      <div class="flex gap-2">
        <InputText v-model="messageText" class="w-full"/>
        <Button @click="sendMessageHandler" class="w-[45px] h-[45px]">
          <i class="pi pi-send"></i>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useSocket from '~/composables/useSocket';
import {useUserStore} from '~/stores/useUserStore';

const userStore = useUserStore();
const user = computed(() => userStore.user);

const socket = useSocket();

const participants = ref([]);
const chats = ref([]);
const messageText = ref('');
const currentChatId = ref<string | null>(null);

function onConnect() {
  socket.emit('request_all_chats');
}

function onDisconnect() {
  console.log('Disconnected from chat server');
}

function onReceiveChats(data) {
  chats.value = data;

  participants.value = data.flatMap((chat: any) =>
      chat.participants
          .filter((participant: any) => participant._id !== user.value._id)
          .map((participant: any) => ({
            id: participant._id,
            label: `${participant.name} ${participant.surname}`,
            avatar: participant.is_online
                ? 'https://randomuser.me/api/portraits/men/1.jpg'
                : 'https://randomuser.me/api/portraits/men/2.jpg',
          }))
  );
}

function connectToChatHandler(participantId: string) {
  const chat = chats.value.find((chat: any) =>
      chat.participants.some((participant: any) => participant._id === participantId)
  );

  if (chat) {
    socket.emit('receive-chat', {
      chatId: chat._id,
    });

    currentChatId.value = chat._id;
  } else {
    console.log('Chat not found for this participant');
  }
}

function sendMessageHandler() {
  if (!currentChatId.value) {
    console.log('No chat is currently active');
    return;
  }

  if (messageText.value.trim() === '') {
    console.log('Message text is empty');
    return;
  }

  const messagePayload = {
    chat: currentChatId.value,

    sender: user.value._id,
    message: messageText.value,
  };

  socket.emit('send-message', messagePayload);

  messageText.value = '';
}

if (socket.connected) {
  onConnect();
} else {
  socket.on('connect', onConnect);
}

socket.on('connect', onConnect);
socket.on('disconnect', onDisconnect);
socket.on('send-all-chats', onReceiveChats);
socket.on('receive-message', (data) => {
  console.log('Received message', data);
});

onBeforeUnmount(() => {
  socket.off('connect', onConnect);
  socket.off('disconnect', onDisconnect);
  socket.off('send-all-chats', onReceiveChats);
  socket.off('receive-message');
});
</script>
