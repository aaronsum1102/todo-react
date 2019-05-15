import React from "react"
import PropTypes from "prop-types"
import "./CheckBoxMolecule.css"

class CheckBoxMolecule extends React.Component {
    constructor(props) {
        super(props)
        this.onChecked = this.onChecked.bind(this)
    }

    onChecked() {
        return this.props.onCheckButtonClicked(this.props.checkBoxText)
    }

    render() {
        return <label className={`check-box-molecule ${this.props.className}`}>{this.props.checkBoxText}
            <input type="checkbox" onClick={this.onChecked} />
            <span className="check-box-molecule__check-mark" />
        </label>
    }
}

CheckBoxMolecule.propTypes = {
    checkBoxText: PropTypes.string,
    onCheckButtonClicked: PropTypes.func,
    className: PropTypes.string
}

export default CheckBoxMolecule;