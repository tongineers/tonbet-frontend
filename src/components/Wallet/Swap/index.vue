<template>
    <section>
        <!-- Liquidity Box -->
        <div class="bg-swap-background-primary rounded-3xl p-2">
        
                <!-- <div class="flex-start gap-4 ml-4">
                    <span class="text-sm text-text-primary">Deposit</span>
                    <span class="text-sm text-text-primary">Withdraw</span>
                </div> -->

                <!-- From -->
                <div class="ring-1 ring-swap-background-dark rounded-2xl px-4 py-2">
                    <!-- Title -->
                    <div class="flex-between">
                        <span class="text-swap-text-primary text-sm">From</span>

                        <div class="flex items-center">
                            <!-- Wallet Icon -->
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="#929298">
                                <path
                                    d="M13.8205 12.2878C13.8205 12.4379 13.791 12.5865 13.7335 12.7252C13.6761 12.8638 13.5919 12.9898 13.4858 13.0959C13.3797 13.2021 13.2537 13.2863 13.115 13.3437C12.9764 13.4011 12.8278 13.4307 12.6777 13.4307H3.04911C2.746 13.4307 2.45531 13.3103 2.24099 13.0959C2.02666 12.8816 1.90625 12.5909 1.90625 12.2878V4.18992C1.90625 3.68474 2.10693 3.20026 2.46414 2.84305C2.82135 2.48584 3.30584 2.28516 3.81101 2.28516H10.3718C10.6749 2.28516 10.9656 2.40556 11.1799 2.61989C11.3942 2.83422 11.5146 3.12491 11.5146 3.42801L11.5142 4.20668H12.6777C12.8278 4.20668 12.9764 4.23624 13.115 4.29367C13.2537 4.35111 13.3797 4.43529 13.4858 4.54141C13.5919 4.64754 13.6761 4.77353 13.7335 4.91218C13.791 5.05084 13.8205 5.19946 13.8205 5.34954V12.2878ZM12.6777 5.34954H3.04911V12.2878H12.6777L12.6773 10.356H8.43996V7.28173L12.6773 7.28135V5.34992L12.6777 5.34954ZM12.6777 8.4242H9.58244V9.21316H12.6773V8.42459L12.6777 8.4242ZM10.3718 3.42801H3.81101C3.60894 3.42801 3.41515 3.50829 3.27226 3.65117C3.12938 3.79405 3.04911 3.98785 3.04911 4.18992L3.04873 4.20668H10.3714V3.42801H10.3718Z"
                                    data-sentry-element="path" data-sentry-source-file="BalanceWalletIcon.tsx">
                                </path>
                            </svg>
                            
                            <span class="text-sm text-swap-text-primary font-light">{{ toGrams(Number(jetton.balance || 0)) }}</span>
                        </div>
                    </div>

                    <!-- Token Selector -->
                    <div class="flex-between">
                        <!-- <div class="flex-start bg-noname-gray rounded-xl w-min px-2 py-1">
                            <figure class="w-8">
                                <img src="@/assets/images/ellipse-dark.png">
                            </figure>
                            <span class="ml-2 mr-1 text-xl text-white font-semibold">DICE</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <path fill="#FFFFFF" d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/>
                            </svg>
                        </div> -->

                        <div class="flex-center">
                            <figure class="bg-gradient-token-dark rounded-full w-10 p-2">
                                <img :src="`src/assets/images/${tokenA.icon}`">
                            </figure>
                            <span class="ml-2 text-xl text-white font-semibold">{{ tokenA.name }}</span>
                        </div>

                        <!-- Input Will Be Here ... -->
                        <div class="flex items-end flex-col">
                            <!-- <span class="text-white text-2xl font-semibold">0.34</span> -->
                            <input v-model="amount"
                                @input="amount = safeInput(amount)"
                                dir="rtl" class="w-40 text-white text-2xl font-semibold focus:outline-none">
                            <span class="text-text-primary text-sm">~ $134.84</span>
                        </div>
                    </div>
                </div>

                <!-- Switch Token Pair -->
                <div @click="switchTokenPair"
                     @mouseover="hover = true"
                     @mouseleave="hover = false"
                     class="flex-center cursor-pointer relative">
                    
                     <!-- Arrow Icon -->
                     <div class="animate-bounce flex-center absolute -top-3 bg-text-accent rounded-full w-8 h-8">  
                        <svg v-if="hover" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path fill="#1B1B1B" d="M9 17.586V3H7v14.586l-2.293-2.293-1.414 1.414L8 21.414l4.707-4.707-1.414-1.414L9 17.586zM20.707 7.293 16 2.586l-4.707 4.707 1.414 1.414L15 6.414V21h2V6.414l2.293 2.293 1.414-1.414z"/>
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path fill="#1B1B1B" d="M13 17.586V4h-2v13.586l-6.293-6.293-1.414 1.414L12 21.414l8.707-8.707-1.414-1.414L13 17.586z"/>
                        </svg>
                    </div>
                </div>

                <!-- To -->
                <div class="bg-swap-background-secondary rounded-2xl px-4 py-2 mt-2">
                    <!-- Title -->
                    <div class="flex-between">
                        <span class="text-swap-text-primary text-sm">To</span>
                    </div>

                    <!-- Token Selector -->
                    <div class="flex-between">
                        <!-- <div class="flex-start bg-noname-gray rounded-xl w-min px-2 py-1">
                            <figure class="w-8">
                                <img src="@/assets/images/ton_symbol.svg">
                            </figure>
                            <span class="ml-2 mr-1 text-xl text-white font-semibold">TON</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <path fill="#FFFFFF" d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/>
                            </svg>
                        </div> -->

                        <div class="flex-start">
                            <figure class="bg-gradient-token-dark rounded-full w-10 p-2">
                                <img :src="`src/assets/images/${tokenB.icon}`">
                            </figure>
                            <span class="ml-2 text-xl text-white font-semibold">{{ tokenB.name }}</span>
                        </div>

                        <!-- Input Will Be Here ... -->
                        <div class="flex items-end flex-col">
                            <span class="text-white text-2xl font-semibold">0.34</span>
                            <span class="text-text-primary text-sm">~ $134.84</span>
                        </div>
                    </div>
                </div>
        </div>

        <!-- Button -->
        <div class="bg-text-accent rounded-2xl p-px mt-2">
                
            <div class="flex-center font-semibold text-white h-10">
                Swap
            </div>
                    <!-- <div class="h-0">
                        <figure class="relative w-14 -top-10 -left-7">
                            <img class="" src="@/assets/images/stars.png">
                        </figure>
                    </div> -->

        </div>

        <div class="mt-2">
            <p class="text-swap-text-primary text-xs text-center">
                By participating you agree to our <u>terms</u> and <u>privacy policy</u>, and that you're
                not a citizen of a blacklisted country as specified in our <u>disclaimer</u>
            </p>
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

const amount = ref(0.00);
const hover = ref(false);

const tokenPair = [
    {
        name: "TON",
        icon: "ton_symbol.svg"
    },
    {
        name: "DICE",
        icon: "ellipse-dark.png"
    }
];

const tokenA = ref(tokenPair[0]);
const tokenB = ref(tokenPair[1]);

setInterval(async () => {
    jetton.value = await instance.account.getJettonState(address2.value) as Jetton;
}, 1000);

const switchTokenPair = () => {
    const tmp = tokenA.value;
    tokenA.value = tokenB.value;
    tokenB.value = tmp;
}

const safeInput = (n: Number): number => {
    const fixed = n.toString()
        .replace(/[^0-9.]/g, '')
        .replace(/(\..*?)\..*/g, '$1');
    return Number(fixed).toFixed(2);
}

// <path d="M4.10386 15.4522C3.67286 15.4522 3.30573 15.3006 3.00248 14.9974C2.69923 14.6941 2.54761 14.327 2.54761 13.896V4.10361C2.54761 3.67261 2.69923 3.30549 3.00248 3.00224C3.30573 2.69899 3.67286 2.54736 4.10386 2.54736H13.8962C14.3272 2.54736 14.6944 2.69899 14.9976 3.00224C15.3009 3.30549 15.4525 3.67261 15.4525 4.10361H9.45905C8.72692 4.10361 8.10136 4.36311 7.58236 4.88211C7.06336 5.40111 6.80386 6.02668 6.80386 6.7588V11.2498C6.80386 11.9819 7.06336 12.606 7.58236 13.122C8.10136 13.638 8.72692 13.896 9.45905 13.896H15.4525C15.4525 14.3307 15.3009 14.6988 14.9976 15.0002C14.6944 15.3016 14.3272 15.4522 13.8962 15.4522H4.10386ZM9.45905 12.5998C9.0908 12.5998 8.77223 12.4669 8.50336 12.201C8.23448 11.9351 8.10005 11.6181 8.10005 11.2498V6.7588C8.10005 6.39055 8.23448 6.07199 8.50336 5.80311C8.77223 5.53424 9.0908 5.3998 9.45905 5.3998H14.9935C15.3617 5.3998 15.6803 5.53424 15.9492 5.80311C16.218 6.07199 16.3525 6.39055 16.3525 6.7588V11.2498C16.3525 11.6181 16.218 11.9351 15.9492 12.201C15.6803 12.4669 15.3617 12.5998 14.9935 12.5998H9.45905ZM12.15 10.1248C12.4625 10.1248 12.7282 10.0154 12.9469 9.79668C13.1657 9.57793 13.275 9.3123 13.275 8.9998C13.275 8.6873 13.1657 8.42168 12.9469 8.20293C12.7282 7.98418 12.4625 7.8748 12.15 7.8748C11.8375 7.8748 11.5719 7.98418 11.3532 8.20293C11.1344 8.42168 11.025 8.6873 11.025 8.9998C11.025 9.3123 11.1344 9.57793 11.3532 9.79668C11.5719 10.0154 11.8375 10.1248 12.15 10.1248Z" fill="currentColor"></path>

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

<style lang="postcss" scoped>
</style>
