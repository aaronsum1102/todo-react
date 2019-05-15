import React from "react"
import PropTypes from "prop-types"
import "./TodoListOrganism.css"
import CheckBoxMolecule from "../molecules/CheckBoxMolecule"
import AddTodoItemMolecule from "../molecules/AddTodoItemMolecule"

class TodoListOrganism extends React.Component {
    render() {
        let todoList = this.props.todos.map((todo) => {
            return <CheckBoxMolecule
                className="todo-list-organism__todo-item"
                key={todo.value}
                checkBoxText={todo.value}
                isSelected={todo.isChecked}
                onCheckButtonClicked={this.props.onCheckButtonClicked} />
        })
        return <div className="todo-list-organism">
            {todoList}
            <AddTodoItemMolecule
                className="todo-list-organism__add-todo-item-molecule"
                onSubmitTodoItem={this.props.onSubmitTodoItem} />
        </div>
    }
}

TodoListOrganism.propTypes = {
    onCheckButtonClicked: PropTypes.func,
    todos: PropTypes.array,
    onSubmitTodoItem: PropTypes.func,
}

export default TodoListOrganism;