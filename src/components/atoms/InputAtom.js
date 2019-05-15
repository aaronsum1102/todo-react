import React from "react"
import PropTypes from "prop-types"
import "./InputAtom.css"

class InputAtom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }

        this.onChange = this.onChange.bind(this)
        this.onConfirm = this.onConfirm.bind(this)

        this.inputRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    onChange(event) {
        this.setState({ value: event.target.value })
    }

    onConfirm(event) {
        if (this.inputRef.current.focus && this.state.value && event.key === "Enter") {
            this.props.onSubmitTodoItem(this.state.value)
            this.inputRef.current.focus()
        }
    }

    render() {
        return <input
            type="text"
            ref={this.inputRef}
            className={`input-atom ${this.props.className}`}
            placeholder={this.props.placeHolderText}
            value={this.state.value}
            onChange={this.onChange}
            onKeyPress={this.onConfirm} />
    }
}

InputAtom.propTypes = {
    className: PropTypes.string,
    onSubmitTodoItem: PropTypes.func,
    placeHolderText: PropTypes.string,
}

export default InputAtom;
