import React from 'react';
import ActionsButtonsFooterContainerMolecule from "../molecules/ActionsButtonsFooterContainerMolecule"
import AppBarMolecule from "../molecules/AppBarMolecule"
import TodoListOrganism from "../organisms/TodoListOrganism"
import "./TodoView.css"

class TodoView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isAllSelected: false,
            headerText: "To-Do",
            todos: [
                {
                    value: "todo item 1",
                    isChecked: false
                },
                {
                    value: "todo item 2",
                    isChecked: false
                }]
        }

        this.onClearSelectedClick = this.onClearSelectedClick.bind(this)
        this.onSelectAllClick = this.onSelectAllClick.bind(this)
        this.onTabClicked = this.onTabClicked.bind(this)
        this.onCheckButtonClicked = this.onCheckButtonClicked.bind(this)
        this.onSubmitTodoItem = this.onSubmitTodoItem.bind(this)
    }

    onTabClicked(tabName) {
        this.setState({
            headerText: tabName
        })
    }

    onSelectAllClick() {
        let updatedTodos = this.state.todos.slice()
        updatedTodos.forEach(todoObj => todoObj.isChecked = true)
        this.setState({
            todos: updatedTodos
        })
    }

    onClearSelectedClick() {
        if (this.state.todos.length > 0) {
            let updatedTodos = this.state.todos.slice().filter(todoObj => todoObj.isChecked === false)
            this.setState({
                todos: updatedTodos
            })
        }
    }

    checkIsAllDone() {
        if (this.state.todos.length === 0) {
            this.setState({
                isAllSelected: true
            })
        } else {
            let result = this.state.todos.find(todoObj => todoObj.isChecked === false)
            if (!result) {
                this.setState({
                    isAllSelected: true
                })
            } else {
                if (this.state.isAllSelected) {
                    this.setState({
                        isAllSelected: false
                    })
                }
            }
        }

    }

    onCheckButtonClicked(value) {
        let index = this.state.todos.findIndex(todoObj => todoObj.value === value)
        let updatedTodos = this.state.todos.concat()
        updatedTodos[index].isChecked = !updatedTodos[index].isChecked
        this.setState({
            todos: updatedTodos
        })
        this.checkIsAllDone()
    }

    onSubmitTodoItem(value) {
        let updatedTodos = this.state.todos.slice()
        updatedTodos.push({
            value: value,
            isChecked: false
        })
        this.setState({
            todos: updatedTodos
        })
    }

    render() {
        return <React.Fragment>
            <AppBarMolecule
                headerText={this.state.headerText}
                onTabClicked={this.onTabClicked} />
            <TodoListOrganism
                todos={this.state.todos}
                onCheckButtonClicked={this.onCheckButtonClicked}
                onSubmitTodoItem={this.onSubmitTodoItem} />
            <ActionsButtonsFooterContainerMolecule
                className="todo-view__footer"
                onClearSelectedClick={this.onClearSelectedClick}
                onSelectAllClick={this.onSelectAllClick}
                isAllSelected={this.state.isAllSelected} />
        </React.Fragment>
    }
}

export default TodoView