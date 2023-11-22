import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { UserDto } from '@/models/UserDto'

export const useUser = defineStore("user", () => {
  const userData = ref<UserDto | null>(null);
  const isLogin = computed(() => userData.value !== null)

  const setUser = () => {
    const localUserData = localStorage.getItem("user");
    if (localUserData) {
      userData.value = JSON.parse(localUserData);
    }
  }

  return {userData, isLogin, setUser}
});
