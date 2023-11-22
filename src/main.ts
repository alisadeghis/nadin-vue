import './assets/main.css'
import 'ant-design-vue/dist/reset.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';
import { createI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(createI18n);
app.use(router)
app.use(Antd);
app.component('VIcon', Icon);

app.mount('#app')
