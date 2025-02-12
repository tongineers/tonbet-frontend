<template>
    <div class="flex items-center bg-gray-600 rounded-full p-1 w-40 cursor-pointer" @click="toggle">
        <div class="w-1/2 text-center py-1 rounded-full transition-all duration-500"
            :class="isActive ? 'bg-gray-900 text-white' : 'text-black'">
            Dice
        </div>
        <div class="w-1/2 text-center py-1 rounded-full transition-all duration-500"
            :class="!isActive ? 'bg-gray-900 text-white' : 'text-black'">
            Liquidity
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const isActive = ref(true);

const toggle = () => {
    isActive.value = !isActive.value;
}
</script>
