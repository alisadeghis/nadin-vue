import 'ant-design-vue/dist/reset.css';
import './assets/css/font.css'
import './assets/css/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';
import { createI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue';

import App from './App.vue'
import router from './router'
import i18n from './i18n';

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
pinia.use(({store}) => {
    store.$router = markRaw(router)
})
app.use(createI18n);
app.use(router)
app.use(Antd);
app.use(i18n);
app.component('VIcon', Icon);

app.mount('#app')
