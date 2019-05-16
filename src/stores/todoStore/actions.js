const ADD_TODO = "ADD_TODO"
const UPDATE_TODO_STATUS = "UPDATE_TODO_STATUS"
const REMOVE_TODO = "REMOVE_TODO"
const CHECKED_ALL_TODOS = "CHECKED_ALL_TODOS"

function addTodo(value) {
    return {
        type: ADD_TODO,
        todo: {
            value: value,
            isChecked: false
        }
    }
}
function updateTodoStatus(value) {
    return {
        type: UPDATE_TODO_STATUS,
        value
    }
}
function removeTodo() {
    return {
        type: REMOVE_TODO
    }
}
function checkedAllTodos() {
    return {
        type: CHECKED_ALL_TODOS
    }
}

export {
    ADD_TODO,
    UPDATE_TODO_STATUS,
    REMOVE_TODO,
    CHECKED_ALL_TODOS,
    addTodo,
    updateTodoStatus,
    removeTodo,
    checkedAllTodos
}