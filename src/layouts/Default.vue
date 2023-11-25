<template>
  <a-layout class="min-h-screen">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <RouterLink to="/">
          <a-menu-item key="/">
            <icon>
              <template #component>
                <VIcon class="text-[20px]" icon="mdi-home" />
              </template>
            </icon>
            <span>{{ $t('sidebar.dashboard') }}</span>
          </a-menu-item>
        </RouterLink>
        <RouterLink to="/weather">
          <a-menu-item key="/weather">
            <icon>
              <template #component>
                <VIcon class="text-[20px]" icon="mdi-weather-hazy" />
              </template>
            </icon>
            <span>{{ $t('sidebar.weather') }}</span>
          </a-menu-item>
        </RouterLink>
        <RouterLink to="/todos">
          <a-menu-item key="/todos">
            <icon>
              <template #component>
                <VIcon class="text-[20px]" icon="mdi-checkbox-marked" />
              </template>
            </icon>
            <span>{{ $t('sidebar.todos') }}</span>
          </a-menu-item>
        </RouterLink>
        <RouterLink to="/profile">
          <a-menu-item key="/profile">
            <UserOutlined style="font-size: 18px;" />
            <span>{{ $t('sidebar.profile') }}</span>
          </a-menu-item>
        </RouterLink>
        <a-menu-item @click="userStore.logOut">
          <icon>
            <template #component>
              <VIcon class="text-[18px] mt-3" icon="mdi-logout" />
            </template>
          </icon>
          <span>{{ $t('sidebar.logout') }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0 15px">
        <div class="flex items-center">
          <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
          <span class="ms-4 font-bold">{{ timer }}</span>
          <select class="ms-auto border-2 px-2 py-1 rounded-lg border-stone-400 text-stone-400" @change="handelLocale($event)">
            <option v-for="lang in supportedLanguages()" :key="lang" :value="lang">{{ lang }}</option>
          </select>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import Icon, { HomeOutlined } from '@ant-design/icons-vue';
import { useRoute } from 'vue-router';
import { useUser } from '@/stores/user'
import { useLanguage } from '@/composables/useLanguage';
const userStore = useUser()
const route = useRoute()
const { supportedLanguages, setNewLang } = useLanguage()
const selectedKeys = ref<string[]>([route.path]);
const collapsed = ref<boolean>(false);
const timer = ref('')

// const logOut = () => {
//   localStorage.clear()
// }

const setTimer = () => {
  const date = new Date()
  timer.value = `${date.getHours()}:${date.getMinutes()}`
}
const handelLocale = (event: Event) => {
  const inputTag = event.target as HTMLInputElement 
  const value = inputTag.value
  const dir = () => value === 'fa' ? 'rtl' : 'ltr' 
  setNewLang(value, dir())  
}
setTimer()
setInterval(() => setTimer(), 1000)


</script>







<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
