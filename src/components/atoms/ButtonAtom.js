import React from 'react';
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./ButtonAtom.css"

class ButtonAtom extends React.PureComponent {
    getButtonClass() {
        let result = ["button-atom"]
        if (this.props.isDisabled) {
            result.push("button-atom--disabled")
        }
        if (this.props.type) {
            result.push(`button-atom--${this.props.type}`)
        }
        if (this.props.className) {
            result.push(this.props.className)
        }
        return result.join(" ")
    }

    getButtonTextClass() {
        let result = ["button-atom__text"]
        if (this.props.iconName) {
            result.push("button-atom__text--has-icon")
        }
        return result.join(" ")
    }

    render() {
        console.log("object");
        const onClick = this.props.isDisabled ? null : this.props.onClick
        let icon
        if (this.props.iconName) {
            icon = <FontAwesomeIcon icon={this.props.iconName} />
        }
        return <button className={this.getButtonClass()} onClick={onClick}>
            {icon}
            <span className={this.getButtonTextClass()}>{this.props.buttonText}</span>
        </button >
    }
}

ButtonAtom.defaultProps = {
    isDisabled: false
}

ButtonAtom.propTypes = {
    buttonText: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
    className: PropTypes.string,
    iconName: PropTypes.string
}

export default ButtonAtom