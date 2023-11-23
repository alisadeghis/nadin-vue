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
            <span>Dashboard</span>
          </a-menu-item>
        </RouterLink>
        <RouterLink to="/weather">
          <a-menu-item key="/weather">
            <icon>
              <template #component>
                <VIcon class="text-[20px]" icon="mdi-weather-hazy" />
              </template>
            </icon>
            <span>Weather</span>
          </a-menu-item>
        </RouterLink>
        <RouterLink to="/todos">
          <a-menu-item key="/todos">
            <icon>
              <template #component>
                <VIcon class="text-[20px]" icon="mdi-checkbox-marked" />
              </template>
            </icon>
            <span>Todos</span>
          </a-menu-item>
        </RouterLink>
        <RouterLink to="/profile">
          <a-menu-item key="/profile">
            <UserOutlined style="font-size: 18px;" />
            <span>Profile</span>
          </a-menu-item>
        </RouterLink>
        <a-menu-item @click="userStore.logOut">
          <icon>
            <template #component>
              <VIcon class="text-[18px] mt-3" icon="mdi-logout" />
            </template>
          </icon>
          <span>Log Out</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0 15px">
        <div class="flex items-center">
          <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
          <span class="ml-2 font-bold">{{ timer }}</span>
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
const userStore = useUser()
const route = useRoute()
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
