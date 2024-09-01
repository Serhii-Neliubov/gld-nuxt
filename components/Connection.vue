<script setup>
import useSocket from "~/composables/useSocket";

const socket = useSocket();
const isConnected = ref(false);
const transport = ref("N/A");

if (socket.connected) {
  onConnect();
}

function onConnect() {
  isConnected.value = true;
  transport.value = socket.io.engine.transport.name;

  socket.io.engine.on("upgrade", (rawTransport) => {
    transport.value = rawTransport.name;
  });

  socket.emit("join", "room1", (response) => {
    console.log("Join room1 response:", response);
  });
}

function onDisconnect() {
  console.log("Disconnected from the socket server.");
  isConnected.value = false;
  transport.value = "N/A";
}


socket.on("connect", onConnect);
socket.on("disconnect", onDisconnect);

onBeforeUnmount(() => {
  socket.off("connect", onConnect);
  socket.off("disconnect", onDisconnect);
});

</script>

<template>
  <div>
    <p>Status: {{ isConnected ? "connected" : "disconnected" }}</p>
    <p>Transport: {{ transport }}</p>
  </div>
</template>
