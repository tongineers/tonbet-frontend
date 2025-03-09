<template>
    <section>
        <div class="flex-start flex-col bg-gradient-liqudity min-h-screen">
            <div class="">
                <Header class="py-4" />
                <Liquidity />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Header from '@/components/Header';
import Liquidity from '@/components/Wallet/Liquidity';
</script>
