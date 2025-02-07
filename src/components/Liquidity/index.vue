<template>
    <section>
        <div
            class="shadow-[0px_0px_73px_-30px_#9B9B9B] rounded-[calc(1.5rem-1px)] p-2 bg-gradient-to-br from-tonbetGray to-tonbetGray ring-1 ring-tonbetGrayLighty">
            <div class="flex gap-4">
                <div id="bet_amount"
                    class="flex flex-col w-full justify-between px-4 py-2 bg-tonbetGrayLight rounded-2xl ring-1 ring-tonbetGrayLighty">
                    <div class="flex items-center justify-between">
                        <span class="text-tonbetGrayText text-sm font-spacegrotesk font-semibold">Deposit
                            Amount</span>

                        <div class="flex items-center gap-2">
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
                                <span class="text-tonbetLightBlue font-light text-sm font-spacegrotesk">0</span>
                            </div>

                            <span
                                class="px-2 py-1 rounded-md bg-tonbetLabelBg text-tonbetLightBlue text-xs font-semibold font-spacegrotesk">Max</span>

                            <span
                                class="px-2 py-1 rounded-md bg-tonbetLabelBg text-tonbetLightBlue text-xs font-semibold font-spacegrotesk">50%</span>

                        </div>
                    </div>

                    <div class="flex items-center mt-2">
                        <figure class="p-2 w-10 bg-gradient-to-br from-tonbetGray to-tonbetGrayLight rounded-full">
                            <img src="../../assets/images/ton_symbol.svg">
                        </figure>
                        <input v-model="bet"
                            class="focus:outline-none pl-2 font-spacegrotesk text-lg font-bold text-white" />
                    </div>
                </div>
            </div>

            <div id="bet_amount"
                class="mt-2 h-14 flex flex-col w-full justify-between px-4 py-2 bg-tonbetGrayLight rounded-2xl ring-1 ring-tonbetGrayLighty">
                <span class="text-tonbetGrayText text-sm font-spacegrotesk font-semibold">Share of pool</span>
            </div>

            <!-- <div id="payout_win"
                    class="mt-2 flex flex-col w-full justify-between px-4 py-2 bg-tonBetFieldBg rounded-2xl">
                    <div class="flex items-center justify-between">
                        <span class="text-tonbetLightBlue text-sm font-spacegrotesk font-semibold">Payout On
                            Win</span>

                    </div>

                    <div class="flex items-center mt-2">
                        <figure class="p-2 w-10 bg-gradient-to-br from-tonBetBlue to-tonBetFieldBg rounded-full">
                            <img src="../../assets/images/ton_symbol.svg">
                        </figure>
                        <input v-model="payOut"
                            class="focus:outline-none pl-2 font-spacegrotesk text-lg font-bold text-white" />
                    </div>
                </div> -->

            <!-- <div id="slider" class="mt-2 space-y-5 flex flex-col py-2 rounded-2xl h-32 bg-tonBetFieldBg">
                    <div class="flex justify-between">
                        <div class="w-1/3 flex justify-center border-r border-diceBlueLight">
                            <div class="flex flex-col justify-between items-center">
                                <span class="text-tonbetLightBlue text-xs font-bold font-spacegrotesk text-center">
                                    {{ $t('rollunderToWin') }}
                                </span>
                                <span class="text-xl font-spacegrotesk font-bold text-white">
                                    {{ rollUnder }}
                                </span>
                            </div>
                        </div>

                        <div class="w-1/3 flex justify-center">
                            <div class="flex flex-col justify-between items-center">
                                <span class="text-tonbetLightBlue text-xs font-bold font-spacegrotesk text-center">
                                    {{ $t('ratio') }}
                                </span>
                                <span class="text-xl font-spacegrotesk font-bold text-white">
                                    ×{{ Number(payOut).toFixed(2) }}
                                </span>
                            </div>
                        </div>

                        <div class="w-1/3 flex justify-center border-l border-diceBlueLight">
                            <div class="flex flex-col justify-between items-center">
                                <span class="text-tonbetLightBlue text-xs font-bold font-spacegrotesk text-center">
                                    {{ $t('winChance') }}
                                </span>
                                <span class="text-xl font-spacegrotesk font-bold text-white">
                                    {{ winChance }}%
                                </span>
                            </div>
                        </div>
                    </div>

                    <VSlider v-model="rollUnder" min="2" max="96" color="#6E4EFC" step="1" track-color="grey"
                        thumb-label="always" />
                </div> -->

            <!-- <div class="w-full"> -->
            <div
                class="mt-2 h-10 flex justify-center items-center bg-gradient-to-tr from-tonbetPink to-tonbetPink rounded-2xl py-1 px-10 font-spacegrotesk font-bold text-white">
                Add Liquidity
            </div>
            <!-- </div> -->

            <!-- <div class="mt-4 flex items-center justify-center relative"> -->
            <!-- <div @click="placeBet"
                    class="border-2 border-red-500 rounded-lg font-spacegrotesk font-bold text-tonbetLightBlue p-2">
                    
                </div> -->
            <!-- <div class="mt-4 flex items-center justify-center relative">
                    <div class="rounded-lg p-px bg-gradient-to-r from-tonbetButtonBorderFrom to-tonbetButtonBorderTo">
                        <div
                            class="rounded-[calc(0.5rem-1px)] font-spacegrotesk font-bold text-tonbetButtonFont px-10 py-2 bg-gradient-to-r from-tonbetButtonBgFrom to-tonbetButtonBgTo">
                            Roll Dice
                        </div>
                    </div>
                </div> -->
            <!-- </div> -->

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
                    </div>

                <div class="absolute right-0 font-dicefont text-white">
                    {{ toGrams(balance) }} TON
                </div>
            </div> -->
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
</script>

<style lang="postcss" scoped></style>
