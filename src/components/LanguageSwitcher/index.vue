<template>
    <section>
        <div class="language-selector">
            <div class="selected-language" @click="toggleDropdown">
                <img :src="currentLanguage.flag" :alt="currentLanguage.label">
            </div>

            <ul v-if="dropdownOpen" class="dropdown-list">
                <li v-for="(language, key) in languages" :key="key" @click="selectLanguage(key as string)"
                    class="dropdown-item">
                    <img :src="language.flag" :alt="language.label" />
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, availableLocales } = useI18n();

const dropdownOpen = ref(false);

interface ILanguage {
    label: string;
    flag: string;
}

const languages: { [key: string]: ILanguage } = {
    en: { label: "English", flag: "/src/assets/images/flag-us.png" },
    ru: { label: "Русский", flag: "/src/assets/images/flag-ru.png" },
    ch: { label: "中文", flag: "/src/assets/images/flag-ch.png" },
};

const currentLanguage = computed(() => languages[locale.value]);

const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
}

const selectLanguage = (key: string) => {
    locale.value = key;
    dropdownOpen.value = false;
}
</script>

<style lang="postcss" scoped>
.language-selector {
    @apply relative flex flex-col items-center cursor-pointer;
}

.selected-language {
    img {
        @apply w-5;
    }
}

.dropdown-list {
    @apply absolute top-full bg-gray-900 rounded-full m-1 px-2 py-1 cursor-pointer;
}

.dropdown-item {
    @apply py-1;

    img {
        @apply w-5;
    }
}
</style>
