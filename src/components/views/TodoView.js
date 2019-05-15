import React from 'react';
import ActionsButtonsFooterContainerMolecule from "../molecules/ActionsButtonsFooterContainerMolecule"
import AppBarMolecule from "../molecules/AppBarMolecule"
import "./TodoView.css"
import CheckBoxMolecule from "../molecules/CheckBoxMolecule"

class TodoView extends React.Component {
    constructor(props) {
        super(props)
        this.onClearSelectedClick = this.onClearSelectedClick.bind(this)
        this.onSelectAllClick = this.onSelectAllClick.bind(this)
        this.onTabClicked = this.onTabClicked.bind(this)
        this.onCheckAtomClicked = this.onCheckAtomClicked.bind(this)
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

    onCheckAtomClicked() {
        alert("checkatom click")
    }

    render() {
        return <React.Fragment>
            <AppBarMolecule headerText={this.state.headerText} onTabClicked={this.onTabClicked} />
            <CheckBoxMolecule checkAtomText="test check box" isChecked={true} onCheckAtomClicked={this.onCheckAtomClicked} />
            <ActionsButtonsFooterContainerMolecule
                className="todo-view__footer"
                onClearSelectedClick={this.onClearSelectedClick}
                onSelectAllClick={this.onSelectAllClick}
                isAllSelected={this.state.isAllSelected} />
        </React.Fragment>
    }
}

export default TodoView