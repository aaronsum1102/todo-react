import React from 'react';
import PropTypes from "prop-types"
import ActionsButtonsFooterContainerMolecule from "../molecules/ActionsButtonsFooterContainerMolecule"
import AppBarMolecule from "../molecules/AppBarMolecule"
import TodoListOrganism from "../organisms/TodoListOrganism"
import "./TodoView.css"

class TodoView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headerText: "To-Do",
        }

        this.onTabClicked = this.onTabClicked.bind(this)
    }

    onTabClicked(tabName) {
        this.setState({
            headerText: tabName
        })
    }

    render() {
        return <React.Fragment>
            <AppBarMolecule
                headerText={this.state.headerText}
                onTabClicked={this.onTabClicked} />
            <TodoListOrganism
                todos={this.props.todos}
                onCheckButtonClicked={this.props.updateTodoStatus}
                onSubmitTodoItem={this.props.addTodo} />
            <ActionsButtonsFooterContainerMolecule
                className="todo-view__footer"
                onClearSelectedClick={this.props.removeTodo}
                onSelectAllClick={this.props.checkedAllTodos}
                isAllSelected={this.props.isAllTodosSelected} />
        </React.Fragment>
    }
}

TodoView.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        isChecked: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    isAllTodosSelected: PropTypes.bool.isRequired,
    addTodo: PropTypes.func.isRequired,
    updateTodoStatus: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    checkedAllTodos: PropTypes.func.isRequired
}

export default TodoView