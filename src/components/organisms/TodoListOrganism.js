import React from "react"
import PropTypes from "prop-types"
import "./TodoListOrganism.css"
import CheckBoxMolecule from "../molecules/CheckBoxMolecule"

class TodoListOrganism extends React.Component {
    constructor(props) {
        super(props)
        this.onCheckButtonClicked = this.onCheckButtonClicked.bind(this)
        this.state = {
            todos: [{
                value: "hellow world",
                isChecked: false
            }, { value: "work load 1", isChecked: false }]
        }
    }

    onCheckButtonClicked(value) {
        let index = this.state.todos.findIndex(todoObj => todoObj.value === value)
        let updatedTodos = this.state.todos.concat()
        updatedTodos[index].isChecked = !updatedTodos[index].isChecked
        this.setState({
            todos: updatedTodos
        })
    }

    render() {
        let todoList = this.state.todos.map(todoObj => todoObj.value).map((todo) => {
            return <CheckBoxMolecule className="todo-list-organism__todo-item" key={todo} checkBoxText={todo} onCheckButtonClicked={this.onCheckButtonClicked} />
        })
        return <div className="todo-list-organism">
            {todoList}
        </div>
    }
}

export default TodoListOrganism;