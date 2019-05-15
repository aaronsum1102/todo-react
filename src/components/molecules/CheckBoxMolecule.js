import React from "react"
import PropTypes from "prop-types"
import "./CheckBoxMolecule.css"

class CheckBoxMolecule extends React.Component {
    render() {
        return <label className="check-box-molecule">{this.props.checkAtomText}
            <input type="checkbox" onClick={this.props.onCheckAtomClicked} />
            <span className="check-box-molecule__check-mark" />
        </label>
    }
}

CheckBoxMolecule.propTypes = {
    checkAtomText: PropTypes.string,
    onCheckAtomClicked: PropTypes.func
}

export default CheckBoxMolecule;