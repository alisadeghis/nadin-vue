<template>
    <div :class="{ 'opacity-50': todo.status === TodoStatus.Done }"
        class="todo duration-200 p-4 justify-between rounded-xl bg-stone-50 shadow-lg flex items-center">
        <input ref="input" v-show="isEdit" class="p-3 max-w-[300px]" v-model="editValue" type="text">
        <span v-show="!isEdit" class="font-bold text-stone-500">{{ todo.title }}</span>
        <div v-if="isEdit" class="flex items-center">
            <button @click="onChangeTodo(todoEditId, editValue)"
                class="w-6 h-6 flex items-center me-2 justify-center bg-green-100 text-green-500 rounded-lg">
                <VIcon icon="mdi-check" />
            </button>
            <button @click="isEdit = false, editValue = '', todoEditId = 0"
                class="w-6 h-6 flex items-center justify-center bg-red-100 text-red-500 rounded-lg">
                <VIcon icon="mdi-close" />
            </button>
        </div>
        <div v-else class="flex items-center">
            <button @click="handelTodoEditInput(todo.id, todo.title)"
                class="w-6 h-6 flex items-center me-2 justify-center bg-blue-100 text-blue-500 rounded-lg">
                <VIcon icon="mdi-pen" />
            </button>
            <button @click="handelTodoStatus(todo.id, todo.status)"
                class="w-6 h-6 flex items-center me-2 justify-center bg-green-100 text-green-500 rounded-lg">
                <VIcon icon="mdi-check" />
            </button>
            <button @click="handelTodoRemove(todo.id)"
                class="w-6 h-6 flex items-center justify-center bg-red-100 text-red-500 rounded-lg">
                <VIcon icon="mdi-trash-can" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTodos } from '@/composables/useTodos';
import { notification } from 'ant-design-vue';

import { TodoStatus, type TodoDto } from '@/models/TodosDto';
import { ref } from 'vue';
const { changeStatusTodo, deleteTodo, editTodo } = useTodos()
const isEdit = ref(false)
const editValue = ref('')
const todoEditId = ref(0)
const input = ref<HTMLInputElement>()
const props = defineProps<{
    todo: TodoDto
}>()
const emits = defineEmits({
    change: () => true
})
const handelTodoStatus = (todoId: number, status: TodoStatus) => {
    changeStatusTodo(todoId, status === TodoStatus.Done ? TodoStatus.Pending : TodoStatus.Done)
    emits('change')
}
const handelTodoRemove = (todoId: number) => {
    deleteTodo(todoId)
    emits('change')
}

const handelTodoEditInput = (todoId: number, value: string) => {
    editValue.value = value
    todoEditId.value = todoId
    isEdit.value = true    
    setTimeout(() => input.value?.focus({preventScroll: true}) , 1)
    
    
}
const onChangeTodo = (todoId: number, value: string) => {
    if (value.trim()) {
        editTodo(todoId, value)
        emits('change')
        isEdit.value = false
        editValue.value = ''
        todoEditId.value = 0
        return
    }
    notification.error({
        message: 'enter value',
        // description: 'welcome',
    })
}

</script>

<style scoped></style>