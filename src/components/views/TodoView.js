import React from 'react';
import ActionsButtonsFooterContainerMolecule from "../molecules/ActionsButtonsFooterContainerMolecule"
import AppBarMolecule from "../molecules/AppBarMolecule"
import "./TodoView.css"

class TodoView extends React.Component {
    constructor(props) {
        super(props)
        this.onClearSelectedClick = this.onClearSelectedClick.bind(this)
        this.onSelectAllClick = this.onSelectAllClick.bind(this)
        this.onTabClicked = this.onTabClicked.bind(this)
        this.state = {
            isAllSelected: false,
            headerText: "To-Do"
        }
    }

    onTabClicked(tabName) {
        this.setState({
            headerText: tabName
        })
    }

    onSelectAllClick() {
        alert("select all click")
    }

    onClearSelectedClick() {
        alert("clear selected click")
    }

    render() {
        return <div>
            <AppBarMolecule headerText={this.state.headerText} onTabClicked={this.onTabClicked} />
            <ActionsButtonsFooterContainerMolecule
                className="todo-view__footer"
                onClearSelectedClick={this.onClearSelectedClick}
                onSelectAllClick={this.onSelectAllClick}
                isAllSelected={this.state.isAllSelected} />
        </div>
    }
}

export default TodoView