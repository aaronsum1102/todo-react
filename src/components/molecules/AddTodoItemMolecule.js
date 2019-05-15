import React from "react"
import PropTypes from "prop-types"
import "./AddTodoItemMolecule.css"
import InputAtom from "../atoms/InputAtom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AddTodoItemMolecule extends React.Component {
    render() {
        return <div className={`add-todo-item-molecule ${this.props.className}`}>
            <FontAwesomeIcon icon="plus"></FontAwesomeIcon>
            <InputAtom
                className="add-todo-item-moelcule__input-atom"
                placeHolderText="write a new task here..."
                onSubmitTodoItem={this.props.onSubmitTodoItem}
            ></InputAtom>
        </div>
    }
}

AddTodoItemMolecule.propTypes = {
    className: PropTypes.string,
    onSubmitTodoItem: PropTypes.func,
}

export default AddTodoItemMolecule;