<template>
    <section>
        <!-- Dice Box -->
        <div class="bg-gradient-primary highlight-primary rounded-3xl p-px">
            <div class="bg-gradient-secondary rounded-[calc(1.5rem-1px)] p-2">

                <!-- <section class="flex gap-2"> -->
                <!-- Bet Amount Field -->
                <div class="flex flex-col bg-royal-blue rounded-2xl px-4 py-2 mb-2">
                    <div class="flex-between">
                        <span class="text-sm text-highlight font-semibold">{{ $t('betAmount') }}</span>

                        <!-- Balance Amount -->
                        <div class="flex items-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="#B4C9FF" class="chakra-icon"
                                color="var(--text-tertiary)" data-sentry-element="svg"
                                data-sentry-component="BalanceWalletIcon"
                                data-sentry-source-file="BalanceWalletIcon.tsx">
                                <path
                                    d="M13.8205 12.2878C13.8205 12.4379 13.791 12.5865 13.7335 12.7252C13.6761 12.8638 13.5919 12.9898 13.4858 13.0959C13.3797 13.2021 13.2537 13.2863 13.115 13.3437C12.9764 13.4011 12.8278 13.4307 12.6777 13.4307H3.04911C2.746 13.4307 2.45531 13.3103 2.24099 13.0959C2.02666 12.8816 1.90625 12.5909 1.90625 12.2878V4.18992C1.90625 3.68474 2.10693 3.20026 2.46414 2.84305C2.82135 2.48584 3.30584 2.28516 3.81101 2.28516H10.3718C10.6749 2.28516 10.9656 2.40556 11.1799 2.61989C11.3942 2.83422 11.5146 3.12491 11.5146 3.42801L11.5142 4.20668H12.6777C12.8278 4.20668 12.9764 4.23624 13.115 4.29367C13.2537 4.35111 13.3797 4.43529 13.4858 4.54141C13.5919 4.64754 13.6761 4.77353 13.7335 4.91218C13.791 5.05084 13.8205 5.19946 13.8205 5.34954V12.2878ZM12.6777 5.34954H3.04911V12.2878H12.6777L12.6773 10.356H8.43996V7.28173L12.6773 7.28135V5.34992L12.6777 5.34954ZM12.6777 8.4242H9.58244V9.21316H12.6773V8.42459L12.6777 8.4242ZM10.3718 3.42801H3.81101C3.60894 3.42801 3.41515 3.50829 3.27226 3.65117C3.12938 3.79405 3.04911 3.98785 3.04911 4.18992L3.04873 4.20668H10.3714V3.42801H10.3718Z"
                                    data-sentry-element="path" data-sentry-source-file="BalanceWalletIcon.tsx">
                                </path>
                            </svg>
                            <span class="text-sm text-white font-light">0</span>
                        </div>
                    </div>

                    <!-- Token Selector -->
                    <div class="flex-between">
                        <div class="flex-center bg-label-primary rounded-xl px-2 py-1">
                            <figure class="w-8">
                                <img src="../../assets/images/ton_symbol.svg">
                            </figure>
                            <span class="ml-2 text-xl text-white font-semibold">TON</span>
                        </div>

                        <!-- Input Will Be Here ... -->

                        <!-- <span class="text-white text-2xl font-semibold">0.34</span> -->
                        <input v-model="bet" dir="rtl"
                            class="w-20 text-white text-2xl font-semibold focus:outline-none">

                        <!-- <div class="gap-1 ml-4">
                                <span
                                    class="bg-label-primary text-label-text text-xs font-semibold rounded-md px-2 py-1">Max</span>
                                <span
                                    class="bg-label-primary text-label-text text-xs font-semibold rounded-md px-2 py-1">50%</span>
                            </div> -->

                    </div>

                    <!-- Bet Amount Input -->
                    <!-- <div class="flex-start mt-2">
                        <figure class="bg-gradient-token rounded-full w-10 p-2">
                            <img src="../../assets/images/ton_symbol.svg">
                        </figure>
                        <span class="ml-2 text-xl text-highlight font-semibold">TON</span>
                        <input v-model="bet" class="text-lg text-white font-bold ml-2 focus:outline-none" />
                    </div> -->
                </div>

                <!-- Payout On Win Field -->
                <div class="bg-royal-blue rounded-2xl w-full px-4 py-2">
                    <span class="text-sm text-highlight font-semibold">{{ $t('payoutOnWin') }}</span>

                    <!-- Payout On Win Input (read-only) -->
                    <div class="flex-start mt-2">
                        <figure class="bg-gradient-token rounded-full w-10 p-2">
                            <img src="../../assets/images/ton_symbol.svg">
                        </figure>
                        <span class="ml-2 text-xl text-highlight font-semibold">TON</span>
                        <input v-model="payOut" class="focus:outline-none text-lg text-white font-bold ml-2" readonly />
                    </div>
                </div>
                <!-- </section> -->

                <!-- Slider Field -->
                <div class="bg-royal-blue rounded-2xl p-2 mt-2 mb-2">
                    <div class="flex-between">

                        <!-- Roll Under -->
                        <div class="flex-center w-1/3 border-r border-label-text">
                            <div class="flex-center flex-col">
                                <span class="text-sm text-highlight font-semibold">
                                    {{ $t('rollunderToWin') }}
                                </span>
                                <span class="text-xl text-white font-bold">
                                    {{ rollUnder }}
                                </span>
                            </div>
                        </div>

                        <!-- Payout On Win -->
                        <div class="flex-center w-1/3">
                            <div class="flex-center flex-col">
                                <span class="text-sm text-highlight font-semibold">
                                    {{ $t('ratio') }}
                                </span>
                                <span class="text-xl text-white font-bold">
                                    ×{{ Number(payOut).toFixed(2) }}
                                </span>
                            </div>
                        </div>

                        <!-- Win Chance -->
                        <div class="flex-center w-1/3 border-l border-label-text">
                            <div class="flex-center flex-col">
                                <span class="text-sm text-highlight font-semibold">
                                    {{ $t('winChance') }}
                                </span>
                                <span class="text-xl text-white font-bold">
                                    {{ winChance }}%
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Slider Element -->
                    <!-- <VSlider v-model="rollUnder" min="2" max="96" color="#6E4EFC" step="1" track-color="grey"
                        thumb-label="always" /> -->
                </div>

                <!-- Roll Dice Button -->
                <!-- <div class="flex-center bg-gradient-button h-10 text-white font-bold rounded-2xl px-10 py-1 mt-2">
                    Roll Dice
                </div> -->

                <div v-if="address" @click="placeBet"
                    class="cursor-pointer flex-center bg-gradient-button h-10 text-white font-bold rounded-2xl px-10 py-1 mt-2">
                    Roll Dice
                </div>
                <div v-else @click="open" class="cursor-pointer">
                    <div
                        class="flex-center shine before:animate-shine rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 font-semibold text-white px-12 py-2">
                        {{ $t('connectWallet') }}
                    </div>
                    <div class="h-0">
                        <figure class="relative w-14 -top-10 -left-7">
                            <img class="" src=" ../../assets/images/stars.png">
                        </figure>
                    </div>
                </div>

                <!-- <div class="mt-3 flex items-center justify-center relative">
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
                    </div> -->
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
// import { VSlider } from 'vuetify/components/VSlider';

import { beginCell } from '@ton/ton'
import { useTonConnectUI, useTonConnectModal, useTonAddress, useTonWallet } from '@townsquarelabs/ui-vue';

import Modal from '@/components/Modal';
import ProgressBar from '@/components/ProgressBar';

import { monitorBetResult } from '@/services/betService';
import { toGrams } from '@/utils/common';

const houseFee = 4;

// const tonweb = new TonWeb(
//     new TonWeb.HttpProvider('https://ton-mainnet.core.chainstack.com/.../api/v2/jsonRPC')
// );
// const jettonWallet = new TonWeb.token.jetton.JettonWallet(tonweb.provider, {
//     address: '0QBGMDcP37XWTNdkJ74CfelWLJl_xF-KjJyQW6BF8oam-4lx'
// });

const isModalVisible = ref(false);
const betResult = ref<null | { message: string; roll: number }>();
// {
//     message: 'You are won! 🎉',
//     roll: 43
// }

const [tonConnectUI, _] = useTonConnectUI();
const { state, open, close } = useTonConnectModal();

let wallet = useTonWallet();
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

    // const body = beginCell()
    //     .storeUint(0, 32) // write 32 zero bits to indicate that a text comment will follow
    //     .storeStringTail(`94`) // write our text comment
    //     .endCell();

    // const transaction = {
    //     from: address.value,
    //     validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
    //     messages: [
    //         {
    //             address: 'kQC5aKOFqjM-Wm1aO9KW3zIBZh4lsQHidRW-XCyqDFN7Y5zc',
    //             amount: `${bet.value * 1000000000}`, // 10000 nanograms = 0.00001 Grams
    //             payload: body.toBoc().toString("base64") // payload with comment in body
    //         }
    //     ]
    // };

    const messageBody = beginCell()
        .storeUint(0x11111111, 32)
        .storeUint(4, 64)
        .storeUint(22, 8)
        .endCell();

    const transaction = {
        from: '0QBB3EmDBfgDijJEuVQ_oXLPhU9ZdooO_fj5i-pitsDZozDh',
        validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
        messages: [
            {
                address: 'kQBnJL-tJNmx9eLR-dM1wupghzG6gOX0LWYRKhAO-7Pe9pKJ',
                amount: `${bet.value * 1000000000}`, // 10000 nanograms = 0.00001 Grams
                payload: messageBody.toBoc().toString("base64") // payload with comment in body
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
