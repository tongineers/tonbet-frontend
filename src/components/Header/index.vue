<template>
    <div class="py-2 flex justify-between items-center">
        <figure class="w-40">
            <img class="" src="../../assets/images/logo.png">
        </figure>

        <div v-if="isAuthorized"
            class="flex items-center justify-between bg-gray-900 rounded-full px-2 py-1 text-white font-sans text-sm">
            {{ addressShortener(account.address) }}
            <div @click="tonConnectUI.disconnect" class="cursor-pointer">
                <figure class="w-5 ml-2">
                    <img src="../../assets/images/logout.svg">
                </figure>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTonConnectUI, useTonAddress } from '@townsquarelabs/ui-vue'
import { useAccountStore } from '@/store/account';
import { addressShortener } from '@/utils/common';

const [tonConnectUI, _] = useTonConnectUI();
const { account, isAuthorized, updateAccount } = useAccountStore();

let address = useTonAddress();
</script>

<style lang="scss" scoped></style>
