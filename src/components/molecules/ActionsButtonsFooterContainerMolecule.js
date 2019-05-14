import React from "react"
import PropTypes from "prop-types"
import ButtonAtom from "../atoms/ButtonAtom"
import "./ActionsButtonsFooterContainerMolecule.css"

class ActionsButtonsFooterContainerMolecule extends React.Component {
    render() {
        return <div className={`action-buttons-footer-container-molecule ${this.props.className}`}>
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

ActionsButtonsFooterContainerMolecule.propTypes = {
    isAllSelected: PropTypes.bool,
    onSelectAllClick: PropTypes.func,
    onClearSelectedClick: PropTypes.func,
    className: PropTypes.string
}

export default ActionsButtonsFooterContainerMolecule