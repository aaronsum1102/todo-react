import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./TabAtom.css"

class TabAtom extends React.Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
    }

    getTabAtomclass() {
        let result = ["tab-atom"]
        if (this.props.isSelected) {
            result.push("tab-atom--selected")
        }
        if (this.props.className) {
            result.push(this.props.className)
        }
        return result.join(" ")
    }

    onClick() {
        if (this.props.tabName === "TO-DO") {
            return this.props.onTabClicked("To-Do")
        } else {
            return this.props.onTabClicked("Weather")
        }

    }

    render() {
        return <button className={this.getTabAtomclass()} onClick={this.onClick}>
            <FontAwesomeIcon icon={this.props.iconName} />
            <span className="tab-atom__tab-name">{this.props.tabName}</span>
        </button>
    }
}

TabAtom.propTypes = {
    iconName: PropTypes.string,
    tabName: PropTypes.string,
    isSelected: PropTypes.bool,
    className: PropTypes.string,
}

export default TabAtom;