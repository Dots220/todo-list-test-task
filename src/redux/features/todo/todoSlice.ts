import {createSlice} from '@reduxjs/toolkit'
import {Todo} from '../../../core/type/todo.type'
import {RootState} from '../../store'

interface todoState {
    todos: Todo[]
}

const initialState: todoState = {
    todos: [],
} as todoState


const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodos(state: todoState, action) {
            state.todos = action.payload
        },
        AddTodo(state: todoState, action) {
            state.todos.push(action.payload)
        },
        DeleteTodo(state: todoState, action) {
            state.todos = state.todos.filter((todo, index) => index !== action.payload)
        },

        EditTodo(state: todoState, action) {
            state.todos = state.todos.map((todo, index) => {
                if (index === action.payload.index) {
                    return {
                        ...todo,
                        text: action.payload.text,
                        checked: action.payload.checked,
                    }
                }
                return todo
            })
        }
    },
})

export const {setTodos, EditTodo, DeleteTodo, AddTodo} = todoSlice.actions

export const selectTodo = (state: RootState) => state.todos.todos

const todoReducer = todoSlice.reducer
export default todoReducer