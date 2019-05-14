import React from "react"
import PropTypes from "prop-types"
import "./PageHeaderTextContainerAtom.css"

class PageHeaderTextContainerAtom extends React.Component {
    render() {
        return <div className="page-header-text-container-atom">
            <h1 className="page-header-text-container-atom__text">{this.props.headerText}</h1>
        </div>
    }
}

PageHeaderTextContainerAtom.propTypes = {
    headerText: PropTypes.string
}

export default PageHeaderTextContainerAtom;

