import React from "react"
import PropTypes from "prop-types"
import PageHeaderTextContainerAtom from "../atoms/PageHeaderTextContainerAtom"
import TabAtom from "../atoms/TabAtom"
import "./AppBarMolecule.css"

class AppBarMolecule extends React.Component {
    getIsToDoTabSelected(tabName) {
        if (this.props.headerText) {
            let headerText = this.props.headerText.toLowerCase()
            let tabNameInLowerCase = tabName.toLowerCase()
            return headerText === tabNameInLowerCase
        }
        return false
    }

    render() {
        const TODO = "TO-DO"
        const WEATHER = "WEATHER"
        return <div className="app-bar-molecule">
            <PageHeaderTextContainerAtom headerText={this.props.headerText} />
            <div className="app-bar-molecule__tabs">
                <TabAtom className="app-bar-molecule__tabs__tab-atom" iconName="list-alt" tabName={TODO} isSelected={this.getIsToDoTabSelected(TODO)} onTabClicked={this.props.onTabClicked} />
                <TabAtom className="app-bar-molecule__tabs__tab-atom" iconName="sun" tabName={WEATHER} isSelected={this.getIsToDoTabSelected(WEATHER)} onTabClicked={this.props.onTabClicked} />
            </div>
        </div>

    }
}

AppBarMolecule.propTypes = {
    headerText: PropTypes.string
}

export default AppBarMolecule