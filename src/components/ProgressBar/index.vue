<template>
    <section>
        <!-- Step Info -->
        <p class="step-name">{{ stepDetails?.name }}</p>
        <p class="step-description">{{ stepDetails?.description }}</p>

        <!-- Progress Bar -->
        <div class="progress-bar">
            <div class="progress-bar-content" :style="{ 'width': `${progressPercentage}%` }">
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// Steps info
const progressSteps = [
    { id: 1, name: "Placing the Bet Signal", description: "Your wager is being sent into the blockchain universe." },
    { id: 2, name: "Fortune Algorithm Activated", description: "The cryptographic wheels of destiny are turning." },
    { id: 3, name: "Blockchain Verdict Pending", description: "The decentralized oracle is calculating your fate." },
    { id: 4, name: "Outcome Decrypted", description: "The result is unlocked and ready to be revealed." },
    { id: 5, name: "Win or Re-spin?", description: "The final outcome is presented, and your adventure continues!" }
];

// Current step and total steps count
const currentStep = ref(1);
const totalSteps: number = progressSteps.length;

// Compute progress percentage and info about current step
const progressPercentage = computed(() => (currentStep.value / totalSteps) * 100);
const stepDetails = computed(() => progressSteps.find(step => step.id === currentStep.value));

// Step increment
const intervalID = setInterval(() => {
    if (currentStep.value > totalSteps) {
        clearInterval(intervalID);
        return;
    }

    currentStep.value++;
}, 2000);
</script>

<style scoped lang="postcss">
.step-name {
    @apply text-xl font-bold font-sans;
}

.step-description {
    @apply text-lg font-normal font-sans;
}

.progress-bar {
    @apply bg-gray-200 h-4 overflow-hidden rounded-full;
}

.progress-bar-content {
    @apply bg-gradient-to-r from-green-500 to-blue-500 h-4 animate-pulse rounded-full;
}
</style>
