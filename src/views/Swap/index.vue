<template>
    <section>
        <div class="flex-start flex-col bg-swap-background-dark min-h-screen">
            <div class="px-2">
                <Header class="py-4" />
                <Liquidity class="" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Header from '@/components/Header';
import Liquidity from '@/components/Wallet/Swap';
</script>
