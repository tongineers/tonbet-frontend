<template>
    <section>
        <div v-if="visible"
            class="flex justify-center items-center h-full w-full absolute top-0 left-0 backdrop-blur-sm bg-white/30"
            @click="close">
            <div class="w-3/4 bg-white p-5 rounded-lg">
                <slot></slot>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { defineModel } from 'vue';

const visible = defineModel('visible', { default: false });

const close = () => {
    visible.value = false;
}
</script>

<style lang="postcss" scoped></style>
