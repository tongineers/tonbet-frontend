<template>
    <section>

        <!-- Liquidity Box -->
        <div class="ring-2 ring-noname-gray highlight-secondary rounded-3xl p-px">
            <div class="bg-gradient-liqudity rounded-[calc(1.5rem-1px)] p-2">

                <!-- <div class="flex-start gap-4 ml-4">
                    <span class="text-sm text-text-primary">Deposit</span>
                    <span class="text-sm text-text-primary">Withdraw</span>
                </div> -->

                <!-- Add Liquidity -->
                <div class="bg-background-dark highlight-accent ring-1 ring-text-accent rounded-2xl px-4 py-2">

                    <!-- Title -->
                    <div class="flex-between">
                        <span class="text-sm text-text-primary">Burn Liquidity</span>

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
                            <span class="text-sm text-white font-light">{{ toGrams(Number(jetton.balance)) }}</span>
                        </div>
                    </div>

                    <!-- Token Selector -->
                    <div class="flex-between py-2">
                        <div class="flex-start bg-noname-gray rounded-xl w-min px-2 py-1">
                            <figure class="w-8">
                                <img src="@/assets/images/ellipse-dark.png">
                            </figure>
                            <span class="ml-2 text-xl text-white font-semibold">dTON</span>
                        </div>

                        <!-- Input Will Be Here ... -->
                        <div class="flex items-end flex-col">
                            <!-- <span class="text-white text-2xl font-semibold">0.34</span> -->
                            <input v-model="amount"
                                @input="amount = amount.toString().replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')"
                                dir="rtl" class="text-white text-2xl font-semibold focus:outline-none">
                            <span class="text-text-primary text-sm">~ $134.84</span>
                        </div>
                    </div>
                </div>

                <!-- Arrow -->
                <div class="flex-center relative">
                    <div class="flex-center absolute -top-2 bg-noname-gray rounded-lg w-6 h-6 ring-1 ring-text-accent">
                        <span class="text-text-accent text-xs">▼</span>
                    </div>
                </div>

                <!-- You Receive -->
                <div class="bg-background-dark rounded-2xl px-4 py-2 mt-2">

                    <!-- Title -->
                    <div class="flex-between">
                        <span class="text-sm text-text-primary">You receive</span>
                    </div>

                    <!-- Token Selector -->
                    <div class="flex-between py-2">
                        <div class="flex-start bg-noname-gray rounded-xl w-min px-2 py-1">
                            <figure class="w-8">
                                <img src="@/assets/images/ton_symbol.svg">
                            </figure>
                            <span class="ml-2 text-xl text-white font-semibold">TON</span>
                        </div>

                        <!-- Input Will Be Here ... -->
                        <div class="flex items-end flex-col">
                            <span class="text-white text-2xl font-semibold">0.34</span>
                            <span class="text-text-primary text-sm">~ $134.84</span>
                        </div>
                    </div>
                </div>

                <!-- Share Of Pool -->
                <div class="ring-1 ring-background-dark rounded-2xl px-4 py-2 mt-2 mb-2">

                    <!-- Title -->
                    <div class="flex-between">
                        <span class="text-sm text-text-primary">Share of pool</span>
                        <span class="text-xs text-text-primary">4% reward fee</span>
                    </div>

                    <div class="text-white text-2xl font-semibold py-2">
                        <span>8.4%</span>
                    </div>
                </div>

                <!-- Button -->
                <div v-if="address2" @click="burnLiquidity"
                    class="cursor-pointer mt-2 h-10 flex justify-center items-center bg-gradient-to-tr from-text-accent to-text-accent rounded-2xl py-1 px-10 font-spacegrotesk font-bold text-white">
                    Burn
                </div>
                <div v-else @click="open" class="cursor-pointer">
                    <div
                        class="flex-center shine before:animate-shine rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 font-semibold text-white px-12 py-2">
                        {{ $t('connectWallet') }}
                    </div>
                    <div class="h-0">
                        <figure class="relative w-14 -top-10 -left-7">
                            <img class="" src="@/assets/images/stars.png">
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useTonConnectUI, useTonConnectModal, useTonAddress, useTonWallet } from '@townsquarelabs/ui-vue';
import { Api } from '@/services/apiService';
import { toGrams } from '@/utils/common';
import { beginCell, address, toNano, internal } from '@ton/ton'
import { RefSymbol } from '@vue/reactivity';

let jetton = ref(<Jetton>{});
const instance = new Api();

const [tonConnectUI, _] = useTonConnectUI();
const { state, open, close } = useTonConnectModal();

const address2 = useTonAddress();
const smartcontAddress = `kQBn05wJBCpLHKWUfBfBWBtZfKXG-PzfzGfqsH7XItZvIAtA`;

const amount = ref(0);

setInterval(async () => {
    jetton.value = await instance.account.getJettonState(address2.value) as Jetton;
}, 1000);

const burnLiquidity = async () => {
    const messageBody = beginCell()
        .storeUint(0x595f07bc, 32)
        .storeUint(0, 64)
        .storeCoins(120000000)
        .storeAddress(address('0QBB3EmDBfgDijJEuVQ_oXLPhU9ZdooO_fj5i-pitsDZozDh'))
        .storeBit(0) // no custom payload
        .storeCoins(0) // forward amount - if > 0, will send notification message
        .storeBit(0) // we store forwardPayload as a reference, set 1 and uncomment next line for have a comment
        // .storeRef(forwardPayload)
        .endCell();

    // const internalMessage = internal({
    //     to: address('EQCU2MY-kOFmuGql2LSd6u4xY8f3amOA98QX5hHDlEQQxmP-'),
    //     value: toNano('0.1'),
    //     bounce: true,
    //     body: messageBody,
    // });

    const transaction = {
        from: '0QBB3EmDBfgDijJEuVQ_oXLPhU9ZdooO_fj5i-pitsDZozDh',
        validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
        messages: [
            {
                address: 'EQCU2MY-kOFmuGql2LSd6u4xY8f3amOA98QX5hHDlEQQxmP-',
                amount: `${toNano('0.1')}`, // 10000 nanograms = 0.00001 Grams
                payload: messageBody.toBoc().toString("base64") // payload with comment in body
            }
        ]
    };

    try {
        await tonConnectUI.sendTransaction(transaction);
        //isModalVisible.value = true;
        // const bocCellBytes = await TonWeb.boc.Cell.oneFromBoc(TonWeb.utils.base64ToBytes(response.boc)).hash();
        // const transactionHash = TonWeb.utils.bytesToBase64(bocCellBytes);

        //const result = await monitorBetResult(address.value, new Date());
        //betResult.value = result;
    } catch (e) {
        console.error(e);
    }
}
</script>

<style lang="postcss" scoped></style>
