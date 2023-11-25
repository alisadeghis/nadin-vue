<template>
    <div>
        <h1 class="font-bold text-xl">{{ $t('todo.title') }}</h1>
        <div class="mt-10">
            <form>
                <div class="">
                    <label class="block mb-1">{{ $t('todo.inputTitle') }}:</label>
                    <a-input v-model:value="todoValue"></a-input>
                </div>
                <button @click="addTodoHandel(todoValue)" type="button" class="px-10 py-2 bg-green-100 text-green-600 mt-5 hover:bg-green-200 rounded-xl">{{ $t('todo.buttonTitle') }}</button>
            </form>
        </div>
        <div class="mt-10">
            <div class="space-y-4" v-if="todos.length !== 0">
                <Todo @change="getTodos" v-for="(todo) in todos" :key="todo.id" :todo="todo" />      
            </div>
            <div v-else class="text-center p-10">{{ $t('todo.notFound') }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Todo from '@/components/Todo.vue';
import { TodoStatus, type TodoDto } from '@/models/TodosDto';
import { reactive } from 'vue';
import { ref } from 'vue';
import { useTodos } from "@/composables/useTodos"
const { setTodo, getTodos, todos } = useTodos()

const todoValue = ref()

// console.log(todos.value);

const addTodoHandel = (value: string) => {
    const todoData = reactive<TodoDto>({
        id: Math.ceil(Math.random() * 1000),
        title: value,
        status: TodoStatus.Pending
    })
    todoValue.value = ''
    setTodo(todoData)
    getTodos()
}

</script>

<style scoped>

</style>