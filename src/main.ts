import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import { messages } from './locales';

import App from './App.vue';
import './assets/styles/app.css';
import router from './router/index'

const app = createApp(App)

app.use(router).
    use(createPinia()).
    use(createI18n({
        legacy: false,
        locale: 'en',
        fallbackLocale: 'ru',
        messages,
    }));

app.mount('#app');
