<template>
    <div>
        <h1 class="font-bold text-2xl text-center">Hi <span class="text-blue-600">{{ userStore.userData?.username }}</span></h1>
    </div>
</template>

<script setup lang="ts">
import { useUser } from '@/stores/user'
const userStore = useUser()``

</script>

<style scoped>

</style>