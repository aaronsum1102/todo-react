import { connect } from 'react-redux'
import {
    addTodo,
    updateTodoStatus,
    removeTodo,
    checkedAllTodos
} from '../stores/todoStore/actions'
import TodoView from '../components/views/TodoView'

function isAllTodosSelected(todos) {
    let result = todos.find(todo => todo.isChecked === false)
    return !result
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        isAllTodosSelected: isAllTodosSelected(state.todos)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: value => {
            dispatch(addTodo(value))
        },
        updateTodoStatus: value => {
            dispatch(updateTodoStatus(value))
        },
        removeTodo: () => dispatch(removeTodo()),
        checkedAllTodos: () => dispatch(checkedAllTodos())
    }
}

const TodoViewContainer = connect(mapStateToProps, mapDispatchToProps)(TodoView)

export default TodoViewContainer