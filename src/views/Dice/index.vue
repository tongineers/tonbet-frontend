<template>
    <section>
        <div class="flex-start flex-col bg-gradient-dark min-h-screen">
            <div class="px-2">
                <Header class="py-4" />
                <Dice />
                <Orders />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Header from '@/components/Header';
import Dice from '@/components/Dice';
import Orders from '@/components/Orders';
</script>
