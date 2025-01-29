<template>
    <section>
        <div class="py-2 flex justify-between items-center">
            <figure class="w-40">
                <img class="" src="../../assets/images/logo.png">
            </figure>

            <div class="flex items-center">
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
            </div>
        </div>
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
