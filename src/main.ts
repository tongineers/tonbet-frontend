import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';
import { createI18n } from 'vue-i18n';
import { messages } from './locales';

import 'vuetify/styles';
import './assets/styles/tailwind.css';
import App from './App.vue';

const app = createApp(App)

app.use(createVuetify()).
    use(createPinia()).
    use(createI18n({
        legacy: false,
        locale: 'en',
        fallbackLocale: 'ru',
        messages,
    }));

app.mount('#app');
