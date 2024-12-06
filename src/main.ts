import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import './assets/styles/tailwind.css'
import App from './App.vue'

const vuetify = createVuetify()
let app = createApp(App)
app.use(vuetify).use(createPinia()).mount('#app')
