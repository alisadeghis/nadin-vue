import type { TodoDto, TodoStatus } from '@/models/TodosDto';
import { ref } from 'vue';
export const useTodos = () => {
    const todos = ref<TodoDto[]>([])

    const setTodo = (task: TodoDto) => {
        todos.value.push(task)
        localStorage.setItem('todos', JSON.stringify(todos.value))
    }
    const getTodos = () => {
        const localTodoData = localStorage.getItem('todos')
        if (localTodoData) {
            todos.value = JSON.parse(localTodoData)
        }
    }
    const changeStatusTodo = (todoId: number, status: TodoStatus) => {
        getTodos()
        if (todos.value.length === 0) return 
        const todo = todos.value.find(i => i.id === todoId)
        if (!todo) return
        todo.status = status
        localStorage.setItem('todos', JSON.stringify(todos.value))
    }

    const deleteTodo = (todoId: number) => {        
        getTodos()
        if (todos.value.length === 0) return 
        todos.value = todos.value.filter(i => i.id !== todoId)
        localStorage.setItem('todos', JSON.stringify(todos.value))
    }

    const editTodo = (todoId: number, value: string) => {        
        getTodos()
        if (todos.value.length === 0) return 
        const todo = todos.value.find(i => i.id === todoId)
        if (!todo) return
        todo.title = value
        localStorage.setItem('todos', JSON.stringify(todos.value))
    }

    getTodos()

    return { todos, setTodo, getTodos, changeStatusTodo, deleteTodo, editTodo }
}