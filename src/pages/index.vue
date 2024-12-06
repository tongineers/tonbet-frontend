<template>
    <TonConnectUIProvider class="flex justify-center h-screen bg-gradient-to-t from-fromDiceBg to-toDiceBg"
        :options="options">
        <section class="w-11/12">
            <Header />
            <BetBox />
            <Orders />
        </section>
    </TonConnectUIProvider>
</template>

<script setup lang="ts">
import { TonConnectUIProvider, TonConnectButton } from '@townsquarelabs/ui-vue';
import Header from '@/components/Header';
import BetBox from '@/components/BetBox';
import Orders from '@/components/Orders';

const options = {
    manifestUrl: "https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"
};
</script>
