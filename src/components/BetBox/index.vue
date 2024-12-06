<template>
    <!-- Start Betbox -->
    <div class="p-3 bg-diceBlue rounded-lg">
        <!-- Dice Logo -->
        <!-- <div class="flex justify-center h-0">
            <figure class="w-20 relative -top-14 drop-shadow-2xl">
                <img class="" src="../../assets/images/dice.png">
            </figure>
        </div> -->
        <label for="bet_amount" class="text-white font-dicefont">
            BET AMOUNT
        </label>
        <!-- Start Bet Amount Field -->
        <div id="bet_amount" class="flex items-center pl-2 rounded h-10 bg-diceBlueDark">
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

        <!-- Space between fields -->
        <div class="py-1"></div>

        <label for="bet_amount" class="text-white font-dicefont">
            PAYOUT ON WIN
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

        <!-- Space between fields -->
        <div class="py-1"></div>

        <div id="slider" class="space-y-5 flex flex-col py-3 rounded h-32 bg-diceBlueDark">
            <div class="flex justify-between">
                <div class="w-1/3 flex justify-center border-r border-diceBlueLight">
                    <div class="flex flex-col justify-between items-center">
                        <span class="text-gray-400 text-xs font-sans text-center">
                            ROLL UNDER TO WIN
                        </span>
                        <span class="text-xl font-dicefont text-white">
                            {{ rollUnder }}
                        </span>
                    </div>
                </div>

                <div class="w-1/3 flex justify-center">
                    <div class="flex flex-col justify-between items-center">
                        <span class="text-gray-400 text-xs font-sans text-center">
                            PAYOUT
                        </span>
                        <span class="text-xl font-dicefont text-white">
                            ×{{ Number(payOut).toFixed(2) }}
                        </span>
                    </div>
                </div>

                <div class="w-1/3 flex justify-center border-l border-diceBlueLight">
                    <div class="flex flex-col justify-between items-center">
                        <span class="text-gray-400 text-xs font-sans text-center">
                            WIN CHANCE
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

        <!-- Space between fields -->
        <div class="py-2"></div>

        <div class="flex items-center justify-center relative">
            <div v-if="address"
                class="shine before:animate-shine bg-diceGold rounded-full font-dicefont text-white px-6 pt-2 pb-1">
                🎲 ROLL DICE
            </div>
            <div v-else @click="open" class="cursor-pointer">
                <div
                    class="shine before:animate-shine rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 font-dicefont text-white px-12 pt-2 pb-1">
                    Connect Wallet
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
    <!-- End of Betbox -->
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { VSlider } from 'vuetify/components/VSlider';
import { useTonConnectUI, useTonConnectModal, useIsConnectionRestored, useTonAddress } from '@townsquarelabs/ui-vue';
import { useAccountStore } from '@/store/account';
import { dateFormat, toGrams } from '@/utils/common';

const houseFee = 4;
const [tonConnectUI, _] = useTonConnectUI();
const { state, open, close } = useTonConnectModal();
const { account, isAuthorized, updateAccount } = useAccountStore();

// let isConnectionRestored = useIsConnectionRestored();
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

watch(address, () => {
    if (!address.value) return;
    updateAccount({
        address: address.value,
        lastActionTime: new Date(),
    })
})

const rollDice = () => {
    let msg = {
        validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
        messages: [
            {
                address: "0QCOu1fuLmD9kBKDkfC6lDskGFbQWCJwimWJvEWWB0D65JvH",
                amount: '20000000',
                payload: `${rollUnder}`
            }
        ]
    };

    tonConnectUI.sendTransaction(
        msg
    );
}
</script>

<style lang="scss" scoped>
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
