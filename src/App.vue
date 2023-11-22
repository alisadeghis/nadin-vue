<template>
    <component v-if="layout" :is="layout">
        <RouterView />
    </component>
    <RouterView v-else />
</template>

<script setup lang="ts">
import Default from '@/layouts/Default.vue'
import Guest from '@/layouts/Guest.vue'
import Auth from '@/layouts/Auth.vue'

import { computed } from 'vue';

import { useRoute } from 'vue-router';
import { LayoutsDto } from './models/LayoutsDto';

const route = useRoute()
const layout = computed(() => {
    const layout = route.meta.layout as LayoutsDto
    switch (layout) {
        case LayoutsDto.Auth:
            return Auth
        case LayoutsDto.Default:
            return Default
        case LayoutsDto.NotLayout:
            return ''
        default:
            return Guest
    }
})

</script>

<style scoped></style>
