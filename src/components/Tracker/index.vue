<template>
    <div></div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useTonAddress } from '@townsquarelabs/ui-vue';
import { Api } from '@/services/apiService';
import { useAccountStore } from '@/store/account';
import eventHub from '../../event'

const { emit } = eventHub();
const instance = new Api();

const { account, isAuthorized } = storeToRefs(useAccountStore());
const address = useTonAddress();

const readyToTrack = computed(() => isAuthorized && account.value?.address === address.value);

setInterval(async () => {
    if (account.value?.waitToResolve) {
        let bets = await instance.bets.getBetsByAddress(account.value?.address as string) as Bet[];
        bets.forEach((bet) => {
            if (bet.createdAt > (account.value?.lastActionTime as Date)) {
                emit('OnBetEventEmit', bet)
            }
        });
    }
}, 1000)
</script>

<style lang="scss" scoped></style>
