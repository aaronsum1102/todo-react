import React from 'react';
import ActionsButtonsFooterContainerMolecule from "../molecules/ActionsButtonsFooterContainerMolecule"

class TodoView extends React.Component {
    constructor(props) {
        super(props)
        this.onClearSelectedClick = this.onClearSelectedClick.bind(this)
        this.onSelectAllClick = this.onSelectAllClick.bind(this)
        this.state = {
            isAllSelected: false
        }
    }

    onSelectAllClick() {
        alert("select all click")
    }

    onClearSelectedClick() {
        alert("clear selected click")
    }

    render() {
        return <ActionsButtonsFooterContainerMolecule
            onClearSelectedClick={this.onClearSelectedClick}
            onSelectAllClick={this.onSelectAllClick}
            isAllSelected={this.state.isAllSelected} />
    }
}

export default TodoView