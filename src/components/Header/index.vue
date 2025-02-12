<template>
    <section>
        <div class="flex-between">
            <!-- Logo -->
            <figure class="w-10">
                <img class="" src="../../assets/images/ellipse-dark.png">
            </figure>

            <ToggleSwitch />

            <!-- Navigation -->
            <!-- <label class="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" value="" checked class="peer sr-only" />
                <div
                    class="peer flex after:absolute h-8 after:h-6 items-center gap-4 rounded-full bg-orange-600 after:w-1/2 after:rounded-full after:bg-white/40 after:transition-all after:content-[''] peer-checked:bg-stone-600 peer-checked:after:translate-x-full peer-focus:outline-none dark:border-slate-600 dark:bg-slate-700 text-sm text-white">

                    <span>Dice</span>
                    <span>Liquidity</span>
                </div>
            </label> -->

            <!-- <label for="check" class="bg-gray-100 cursor-pointer w-40 h-10 rounded-full relative">
                <input type="checkbox" id="check" class="sr-only peer">

                <div class="flex-center bg-rose-300 h-4/5 w-min px-4 rounded-full top-1 left-1
                 peer-checked:bg-rose-600 peer-checked:left-11 transition-all duration-500 absolute">

                <div
                    class="flex after:absolute h-8 after:h-6 items-center gap-4 rounded-full bg-orange-600 after:w-1/2 after:rounded-full after:bg-white/40 after:transition-all after:content-[''] peer-checked:bg-stone-600 peer-checked:after:translate-x-full peer-focus:outline-none dark:border-slate-600 dark:bg-slate-700 text-sm text-white">

                    <span>Dice</span>
                    <span>Liquidity</span>
                </div>
            </label> -->

            <!-- <div class="flex-center bg-gradient-dark rounded-full text-sm font-bold text-white p-1">
                <RouterLink to="/" class="bg-gradient-to-tr from-text-info to-text-link rounded-full px-6 py-2">
                    Dice
                </RouterLink>
                <RouterLink to="/yield" class="px-6 py-2">
                    Liquidity
                </RouterLink>
            </div> -->
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
import ToggleSwitch from '@/components/ToggleSwitch'

const [tonConnectUI, _] = useTonConnectUI();

const address = useTonAddress();
</script>

<style lang="postcss" scoped></style>
