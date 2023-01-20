import { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init)

    const todosCount = todos.length

    const todosPending = todos.filter(todo => todo.done === true).length

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add Todo',
            payload: todo
        }

        dispatchTodo(action)
    }

    const deleteTodo = (id) => {
        dispatchTodo({
            type: 'Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatchTodo({
            type: 'Done Todo',
            payload: id
        })
    }

    return {
        todos,
        todosCount,
        todosPending,
        handleNewTodo,
        deleteTodo,
        handleToggleTodo
    }
}
