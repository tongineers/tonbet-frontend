<template>
    <section>
        <div class="flex-between">
            <!-- Logo -->
            <figure class="w-10">
                <img class="" src="../../assets/images/ellipse.png">
            </figure>

            <!-- Navigation -->
            <div class="flex-center bg-gradient-dark rounded-full text-sm font-bold text-white p-1">
                <RouterLink to="/" class="bg-gradient-to-tr from-text-info to-text-link rounded-full px-6 py-2">
                    Dice
                </RouterLink>
                <RouterLink to="/yield" class="px-6 py-2">
                    Liquidity
                </RouterLink>
            </div>
        </div>

        <!-- <div class="flex items-center">
                <div v-if="address"
                    class="flex items-center justify-between bg-gray-900 rounded-full px-2 py-1 text-white font-sans text-sm">
                    {{ addressShortener(address) }}
                    <div @click="tonConnectUI.disconnect" class="cursor-pointer">
                        <figure class="w-5 ml-2">
                            <img src="../../assets/images/logout.svg">
                        </figure>
                    </div>
                </div>

                <LanguageSwitcher class="pl-3" />
            </div> -->
    </section>
</template>

<script setup lang="ts">
import { useTonConnectUI, useTonAddress } from '@townsquarelabs/ui-vue'
import { addressShortener } from '@/utils/common';
import LanguageSwitcher from '@/components/LanguageSwitcher'

const [tonConnectUI, _] = useTonConnectUI();

const address = useTonAddress();
</script>

<style lang="postcss" scoped></style>
