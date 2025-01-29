<template>
    <section>
        <div class="flex flex-col justify-center items-center">
            <!-- Loading Spinner -->
            <div
                class="my-2 w-12 h-12 rounded-full animate-spin border-4 border-solid border-white border-t-transparent">
            </div>

            <!-- Step Info -->
            <p class="step-name">{{ stepDetails?.name }}</p>
            <div class="step-description">
                <figure class="w-5">
                    <img class="" src="../../assets/images/checkmark.png">
                </figure>
                <p class="pl-1">{{ stepDetails?.description }}</p>
            </div>
        </div>

        <!-- Progress Bar -->
        <!-- <div class="pt-2">
            <div class="progress-bar">
                <div class="progress-bar-content" :style="{ 'width': `${progressPercentage}%` }">
                </div>
            </div>
        </div> -->
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Steps info
const progressSteps = [
    { id: 1, name: t('progressStep1Name'), description: t('progressStep1Description') },
    { id: 2, name: t('progressStep2Name'), description: t('progressStep2Description') },
    { id: 3, name: t('progressStep3Name'), description: t('progressStep3Description') },
    { id: 4, name: t('progressStep4Name'), description: t('progressStep4Description') },
    { id: 5, name: t('progressStep5Name'), description: t('progressStep5Description') }
];

// Current step and total steps count
const currentStep = ref(1);
const totalSteps: number = progressSteps.length;

// Compute progress percentage and info about current step
const progressPercentage = computed(() => (currentStep.value / totalSteps) * 100);
const stepDetails = computed(() => progressSteps.find(step => step.id === currentStep.value));

// Step increment
const intervalID = setInterval(() => {
    if (currentStep.value === totalSteps) {
        clearInterval(intervalID);
        return;
    }

    currentStep.value++;
}, 3000);
</script>

<style scoped lang="postcss">
.step-name {
    @apply text-xl font-bold font-sans text-white;
}

.step-description {
    @apply flex bg-white text-sm font-normal font-sans my-2 py-1 pl-2 pr-3 rounded-full;
}

.progress-bar {
    @apply bg-gray-200 h-4 overflow-hidden rounded-full;
}

.progress-bar-content {
    @apply bg-gradient-to-r from-green-500 to-blue-500 h-4 animate-pulse rounded-full;
}
</style>
