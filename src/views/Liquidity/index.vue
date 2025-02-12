<template>
    <section>
        <div class="flex-start flex-col bg-gradient-liqudity min-h-screen">
            <div class="w-11/12">
                <Header class="pt-3 pb-5" />
                <Liquidity />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Header from '@/components/Header';
import Liquidity from '@/components/Liquidity';
</script>
