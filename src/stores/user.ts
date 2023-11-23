import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { UserDto } from '@/models/UserDto'
import { useRouter } from 'vue-router';
import router from '@/router/index'
export const useUser = defineStore("user", () => {
  const userData = ref<UserDto | null>(null);
  const isLogin = computed(() => userData.value !== null)

  const setUser = () => {
    const localUserData = localStorage.getItem("user");
    if (localUserData) {
      userData.value = JSON.parse(localUserData);
    }
  }

  
  const logOut = () => {
    userData.value = null
    localStorage.clear()
    router.push('/auth/login')
    // router.replace('/auth/login')
  }

  return {userData, isLogin, setUser, logOut}
});
