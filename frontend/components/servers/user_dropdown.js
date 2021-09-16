import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

class UserDropdown extends React.Component {

    constructor(props) {
        super(props)
        this.state = { modal: false, dropdown: false, input: "" }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange() {
        return e => {
            e.preventDefault();
            this.setState({ input: e.currentTarget.value })
        }
    }

    handleDropdown(field) {
        return e => {
            e.preventDefault();
            this.setState({ dropdown: field })
        }
    }

    handleModal(field) {
        return e => {
            e.preventDefault();
            this.setState({ modal: field })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateUser({
            id: this.props.currentUser.id,
            username: this.state.input
        })
        this.setState({ modal: false, dropdown: false, input: "" })
    }

    render() {
        if (this.props.path === "/servers/explore") return null
        if (this.props.server) return null
        return (
            <div className="user-dropdown-container">
                <div 
                    className="user-dropdown-container-div"
                    onClick={this.handleDropdown(!this.state.dropdown)} 
                    onBlur={this.handleDropdown(false)}
                >
                    <p className="user-dropdown-name">{this.props.currentUser.username}</p>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <ul 
                    className="dropdown-list" 
                    id={this.state.dropdown ? "show-dropdown" : ""}
                >
                    <li className="edit-server-name" onClick={this.handleModal(true)}>
                        Edit Username <FontAwesomeIcon icon={faEdit} />
                    </li>
                </ul>
                <div className={`modal-container ${ this.state.modal ? "modal-show" : ""}`}>
                    <div className="edit-server-modal">
                        <form>
                            <p className="edit-modal-customize">Edit Username</p>
                            <label><p className="modal-label">USERNAME</p>
                                <input 
                                    type="text" 
                                    value={this.state.input} 
                                    onChange={this.handleChange()}
                                    className="modal-input"
                                    placeholder={this.props.currentUser.username}
                                >
                                </input>
                            </label>
                            <br/>
                            <input className={`edit-modal-button ${this.state.input.length === 0 ? "button-down" : ""}`} 
                                    disabled={this.state.input.length === 0}
                                type="submit"
                                value="Save"
                                onClick={this.handleSubmit}
                            />
                            <p onClick={this.handleModal(false)} className="edit-modal-cancel">Cancel</p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDropdown;