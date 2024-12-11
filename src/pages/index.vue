<template>
    <TonConnectUIProvider
        class="flex flex-col justify-center items-center h-screen bg-gradient-to-t from-fromDiceBg to-toDiceBg"
        :options="options">
        <Header />
        <BetBox />
        <Orders />
    </TonConnectUIProvider>
</template>

<script setup lang="ts">
import { TonConnectUIProvider } from '@townsquarelabs/ui-vue';
import Header from '@/components/Header';
import BetBox from '@/components/BetBox';
import Orders from '@/components/Orders';

const options = {
    manifestUrl: "https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"
};
</script>
