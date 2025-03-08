<template>
    <div class="flex items-center rounded-full text-sm font-semibold p-1 w-40 cursor-pointer"
        :class="route.path == '/yield' ? 'bg-gradient-liqudity' : 'bg-gradient-secondary'" @click="toggle">
        <div class="w-1/2 text-center py-1 rounded-full transition-all duration-500"
            :class="route.path == '/' ? 'bg-gradient-button text-white' : 'text-white'">
            Dice
        </div>
        <div class="w-1/2 text-center py-1 rounded-full transition-all duration-500"
            :class="route.path == '/yield' ? 'bg-gradient-button-dark text-white' : 'text-white'">
            Liquidity
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const toggle = async () => {
    router.push(route.path == '/' ? '/yield' : '/');
}
</script>
