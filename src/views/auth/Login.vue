<template>
    <div>
        <form @submit.prev="onFinish(formState)">
            <div class="form-item mb-5">
                <label class="mb-2 block font-bold">User Name:</label>
                <a-input v-model:value="formState.username"></a-input>
            </div>
            <div class="form-item mb-5">
                <label class="mb-2 block font-bold">User Name:</label>
                <a-input-password v-model:value="formState.password"></a-input-password>
            </div>
            <div class="form-item">
                <button class="px-5 py-2 bg-blue-400 rounded-lg text-white" type="button" @click="onFinish(formState)">Submit</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { notification } from 'ant-design-vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

import { useUser } from '@/stores/user';

interface FormState {
    username: string;
    password: string;
}

const userStore = useUser()
const router = useRouter()

const openNotification = () => {
  notification.success({
    message: 'Notification welcome',
    description: 'welcome',
  });
};

const formState = reactive<FormState>({
    username: '',
    password: '',
});
const onFinish = (values: FormState) => {
    if (values.username) {
        openNotification()
        userStore.userData = values
        localStorage.setItem("user", JSON.stringify(values));
        router.push('/')
    }
};


</script>

<style scoped></style>