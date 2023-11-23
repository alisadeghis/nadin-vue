<template>
    <div>
        <h1 class="font-bold text-xl">Weather</h1>
        <div class="mt-10">
            <form>
                <div class="">
                    <label class="block mb-1">Task Name:</label>
                    <!-- <a-input v-model:value="location" placeholder="input here" /> -->
                    <a-select ref="select" v-model:value="location" style="width: 120px">
                        <a-select-option v-for="(city, i) in citys" :key="i" :value="city.city">{{ city.city }}</a-select-option>
                    </a-select>
                </div>
                <button @click="getData(location)" type="button"
                    class="px-10 py-2 bg-green-100 text-green-600 mt-5 hover:bg-green-200 rounded-xl">Add Task</button>
            </form>
        </div>
        <div v-if="data && !loading" class="flex mt-10 bg-stone-50 flex-col w-full max-w-[300px] mx-auto shadow-lg rounded-xl p-5">
            <h1 class="font-bold text-lg">{{ data.name }}</h1>
            <h2 class="font-bold text-blue-500 text-3xl mt-5">{{ Math.round(data.main.temp) }}C</h2>
            <h5 class="mt-10 text-stone-400">{{ data.weather[0].description }}</h5>
        </div>
        <div v-else-if="loading" class="flex items-center justify-center p-10">
            <ASpin size="large" />
        </div>
        <div v-else class="flex items-center justify-center p-10">Not Data</div>
    </div>
</template>

<script setup lang="ts">
import { useFetch } from '@/composables/useFetch'
import { notification } from 'ant-design-vue';
import { cities } from '@/assets/ir'
import { ref, reactive } from 'vue';
const location = ref('tehran')
const citys = reactive(cities)
interface ApiRes {
    name: string;
    main: {
        temp: number
    };
    cod: number;
    message: string;
    weather: { description: string }[]
}

const data = ref<ApiRes | null>()
const loading = ref(false)

const getData = async (cityName: string) => {
        loading.value = true 
        const res = await useFetch<ApiRes>(`/weather?q=${cityName}&appid=${'edc228562ac0a8aa3116d41c0687cf56'}&units=metric`, { method: 'get' })
        if (res.value.cod == 404) {
            notification.error({
                message: res.value.message,
            })
            data.value = null
            loading.value = false
            return
        }
        data.value = res.value
        loading.value = false
}

</script>

<style scoped></style>