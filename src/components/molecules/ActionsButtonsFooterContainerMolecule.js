import React from "react"

import ButtonAtom from "../atoms/ButtonAtom"
import "./ActionsButtonsFooterContainerMolecule.css"

class ActionsButtonsFooterContainerMolecule extends React.Component {
    render() {
        return <div className="action-buttons-footer-container-molecule">
            <ButtonAtom
                buttonText="SELECT ALL"
                isDisabled={this.props.isAllSelected}
                type="outline"
                iconName="check-double"
                onClick={this.props.onSelectAllClick} />
            <ButtonAtom
                className="action-buttons-footer-container-molecule__clear-selected-button"
                buttonText="CLEAR SELECTED"
                iconName="trash-alt"
                onClick={this.props.onClearSelectedClick} />
        </ div>
    }
}

export default ActionsButtonsFooterContainerMolecule