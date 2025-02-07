<template>
  <TonConnectUIProvider :options="options">
    <RouterView />
  </TonConnectUIProvider>
</template>

<script setup lang="ts">
import { TonConnectUIProvider } from '@townsquarelabs/ui-vue';

const options = {
  manifestUrl: "https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"
};
</script>
