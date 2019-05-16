import {
    ADD_TODO,
    UPDATE_TODO_STATUS,
    REMOVE_TODO,
    CHECKED_ALL_TODOS
} from "./actions"
import initialState from "./state"

function addTodo(state, action) {
    return Object.assign({}, state, {
        ...state,
        todos: [
            ...state.todos,
            action.todo
        ]
    })
}

function updateTodoStatus(state, action) {
    let updatedTodos = state.todos.map((todo) => {
        if (todo.value === action.value) {
            return Object.assign({}, todo, {
                ...todo,
                isChecked: !todo.isChecked
            })
        }
        return todo
    })
    return Object.assign({}, state, {
        ...state,
        todos: updatedTodos
    })
}

function removeTodo(state) {
    let updatedTodos = state.todos.filter(todo => todo.isChecked === false)
    return Object.assign({}, state, {
        ...state,
        todos: updatedTodos
    })
}

function checkedAllTodos(state) {
    return Object.assign({}, state, {
        ...state,
        todos: state.todos.map(todo => {
            return Object.assign({}, todo, {
                ...todo,
                isChecked: true
            })
        })
    })
}

const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: return addTodo(state, action)
        case UPDATE_TODO_STATUS: return updateTodoStatus(state, action)
        case REMOVE_TODO: return removeTodo(state, action)
        case CHECKED_ALL_TODOS: return checkedAllTodos(state, action)
        default: return state
    }
}

export default todoReducers