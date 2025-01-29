<template>
    <section>
        <!-- Bet Box -->
        <div class="p-3 bg-diceBlue rounded-lg">
            <label for="bet_amount" class="text-white font-dicefont">
                {{ $t('betAmount') }}
            </label>

            <!-- Start Bet Amount Field -->
            <div id="bet_amount" class="mb-2 flex items-center pl-2 rounded h-10 bg-diceBlueDark">
                <figure class="w-5">
                    <img src="../../assets/images/ton_symbol.svg">
                </figure>

                <input v-model="bet" class="focus:outline-none pl-2 bg-diceBlueDark w-1/3 font-dicefont text-white" />

                <div class="flex font-dicefont text-white">
                    <a href="#" class="border-l border-diceBlueLight block px-3 text-center">½</a>
                    <a href="#" class="border-l border-diceBlueLight block px-3 text-center">×2</a>
                    <a href="#" class="border-l border-diceBlueLight block px-3 text-center">MAX</a>
                </div>
            </div>
            <!-- End of Bet Amount Field -->

            <label for="bet_amount" class="text-white font-dicefont">
                {{ $t('payoutOnWin') }}
            </label>

            <!-- Start Payout On Win Field -->
            <div id="bet_amount" class="flex items-center pl-2 rounded h-10 bg-diceBlueDark">
                <figure class="w-5">
                    <img src="../../assets/images/ton_symbol.svg">
                </figure>

                <input v-model="payWin" class="focus:outline-none pl-2 diceBlueDark w-1/3 font-dicefont text-white"
                    readonly />
            </div>
            <!-- End of Payout On Win Field -->

            <div id="slider" class="mt-2 space-y-5 flex flex-col py-3 rounded h-32 bg-diceBlueDark">
                <div class="flex justify-between">
                    <div class="w-1/3 flex justify-center border-r border-diceBlueLight">
                        <div class="flex flex-col justify-between items-center">
                            <span class="text-gray-400 text-xs font-sans text-center">
                                {{ $t('rollunderToWin') }}
                            </span>
                            <span class="text-xl font-dicefont text-white">
                                {{ rollUnder }}
                            </span>
                        </div>
                    </div>

                    <div class="w-1/3 flex justify-center">
                        <div class="flex flex-col justify-between items-center">
                            <span class="text-gray-400 text-xs font-sans text-center">
                                {{ $t('ratio') }}
                            </span>
                            <span class="text-xl font-dicefont text-white">
                                ×{{ Number(payOut).toFixed(2) }}
                            </span>
                        </div>
                    </div>

                    <div class="w-1/3 flex justify-center border-l border-diceBlueLight">
                        <div class="flex flex-col justify-between items-center">
                            <span class="text-gray-400 text-xs font-sans text-center">
                                {{ $t('winChance') }}
                            </span>
                            <span class="text-xl font-dicefont text-white">
                                {{ winChance }}%
                            </span>
                        </div>
                    </div>
                </div>

                <VSlider v-model="rollUnder" min="2" max="96" color="#518FE6" step="1" track-color="grey"
                    thumb-label="always" />
            </div>

            <div class="mt-3 flex items-center justify-center relative">
                <div v-if="address" @click="placeBet"
                    class="cursor-pointer shine before:animate-shine bg-diceGold rounded-full font-dicefont text-white px-6 py-1 pb-2">
                    {{ $t('rollDice') }}
                </div>
                <div v-else @click="open" class="cursor-pointer">
                    <div
                        class="shine before:animate-shine rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 font-dicefont text-white px-12 py-1 pb-2">
                        {{ $t('connectWallet') }}
                    </div>
                    <div class="h-0">
                        <figure class="relative w-14 -top-10 -left-7">
                            <img class="" src=" ../../assets/images/stars.png">
                        </figure>
                    </div>
                </div>

                <div class="absolute right-0 font-dicefont text-white">
                    {{ toGrams(balance) }} TON
                </div>
            </div>
        </div>

        <!-- Modal For Display Bet Result -->
        <Modal v-model:visible="isModalVisible">
            <div v-if="!betResult" class="">
                <ProgressBar />
            </div>
            <div v-else class="flex flex-col justify-center items-center">
                <p class="bg-green-500 text-5xl font-bold text-white p-5 rounded-lg">
                    {{ betResult.roll }} ▼
                </p>
                <p class="pt-5 text-5xl font-bold text-white">
                    {{ betResult.message }}
                </p>
            </div>
        </Modal>
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { VSlider } from 'vuetify/components/VSlider';

import TonWeb from 'tonweb';
import { useTonConnectUI, useTonConnectModal, useTonAddress } from '@townsquarelabs/ui-vue';

import Modal from '@/components/Modal';
import ProgressBar from '@/components/ProgressBar';

import { monitorBetResult } from '@/services/betService';
import { toGrams } from '@/utils/common';

const houseFee = 4;

const isModalVisible = ref(false);
const betResult = ref<null | { message: string; roll: number }>();
// {
//     message: 'You are won! 🎉',
//     roll: 43
// }

const [tonConnectUI, _] = useTonConnectUI();
const { state, open, close } = useTonConnectModal();

let address = useTonAddress();
let balance = ref(0);
let bet = ref(0);
let rollUnder = ref(50);

const winChance = computed(() => {
    return rollUnder.value - 1;
})

const payOut = computed(() => {
    return Math.trunc(((100 - houseFee) / winChance.value) * 10000) / 10000;
})

const payWin = computed(() => {
    return bet.value > 0 ? (Math.trunc(bet.value * payOut.value * 10000) / 10000) : 0;
})

// watch(address, () => {
//     updateAccount({
//         ...account.value,
//         address: address.value,
//     });
// })

const placeBet = async () => {
    const transaction = {
        from: address.value,
        validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
        messages: [
            {
                address: 'EQBdx6lPsOR_quNbfCZUiRgTIa08OosNaSUwnqhjkNFUzJSi',
                amount: `${bet.value * 1000000000}`, // 10000 nanograms = 0.00001 Grams
                payload: `${rollUnder.value}`
            }
        ]
    };

    console.log(transaction);

    try {
        await tonConnectUI.sendTransaction(transaction);
        isModalVisible.value = true;
        // const bocCellBytes = await TonWeb.boc.Cell.oneFromBoc(TonWeb.utils.base64ToBytes(response.boc)).hash();
        // const transactionHash = TonWeb.utils.bytesToBase64(bocCellBytes);

        const result = await monitorBetResult(address.value, new Date());
        betResult.value = result;
    } catch (e) {
        console.error(e);
    }
}
</script>

<style lang="postcss" scoped>
.shine {
    position: relative;
    overflow: hidden;
}

.shine:before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(120deg,
            rgba(255, 255, 255, 0) 30%,
            rgba(255, 255, 255, .8),
            rgba(255, 255, 255, 0) 70%);
    top: 0;
    left: -100px;
}

.v-slider.v-input--horizontal .v-slider-thumb {
    --v-slider-thumb-size: 40px !important;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.v-slider-thumb__label {
    font-size: medium;
    background: none;
    position: relative;
    padding-top: calc(var(--v-slider-thumb-size));
    font-family: 'DiceFont';
}

.v-slider-thumb__label::before {
    content: none !important;
}

.v-slider-thumb__surface {
    border-radius: 5px;
}

.v-slider-thumb__surface::after {
    content: none;
}

.v-slider-thumb__surface::before {
    content: none;
}

.v-slider-thumb:hover {
    pointer-events: none;
}

.v-slider-thumb__ripple {
    all: unset !important;
}
</style>
