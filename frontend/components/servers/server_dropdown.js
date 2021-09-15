import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from "react-router";

class ServerDropdown extends React.Component {

    constructor(props){
        super(props)
        this.state = { dropdown: false, editModal: false, deleteModal: false, name: "" }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDropdown(field) {
        return e => {
            e.preventDefault();
            this.setState({ dropdown: field })
        }
    }

    handleEditModal(field) {
        return e => {
            e.preventDefault();
            this.setState({ editModal: field })
        }
    }

    handleDeleteModal(field) {
        return e => {
            e.preventDefault();
            this.setState({ deleteModal: field })
        }
    }

    handleChange(field) {
        return e => {
            e.preventDefault();
            this.setState({ [field]: e.currentTarget.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateServer({ id: this.props.server.id, name: this.state.name })
        this.setState({ name: "", editModal: false })
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteServer(this.props.server);
        this.setState({ deleteModal: false, dropdown: false })
        this.props.history.push("/servers/@me")
    }

    handleLeaveServer(server) {
        return e => {
            e.preventDefault();
            this.props.deleteUsersServer({ user_id: this.props.currentUser.id, server_id: server.id })
            this.props.updateUser(this.props.currentUser)
            this.props.fetchUserServers(this.props.currentUser.id)
            this.props.history.push("/servers/@me")
        }
    }

    render() {
        if (!this.props.server) return null
        return(
            <div 
                className="server-dropdown-container" 
            >
                <div 
                    className="server-dropdown-container-div"
                    onClick={this.handleDropdown(!this.state.dropdown)} 
                    onBlur={this.handleDropdown(false)}
                >
                    <p className="server-dropdown-name">{this.props.server.name}</p>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <ul 
                    className="dropdown-list" 
                    id={this.state.dropdown ? "show-dropdown" : ""}
                >
                    {this.props.currentUser.id === this.props.server.creator.id ?
                    <li className="edit-server-name" onClick={this.handleEditModal(true)}>
                        Edit Server Name <FontAwesomeIcon icon={faEdit} />
                    </li> : null}
                    <li className="delete-leave-server" 
                        onClick={ this.props.currentUser.id === this.props.server.creator.id ?
                            this.handleDeleteModal(true) : this.handleLeaveServer(this.props.server)}
                    >
                        {this.props.currentUser.id === this.props.server.creator.id ?
                            "Delete Server" : "Leave Server"}
                        <FontAwesomeIcon icon={faArrowCircleLeft} />
                    </li>
                </ul>
                <div className={`modal-container ${ this.state.editModal ? "modal-show" : ""}`}>
                    <div className="edit-server-modal">
                        <form>
                            <p className="edit-modal-customize">Edit Server Name</p>
                            <label><p className="modal-label">SERVER NAME</p>
                                <input 
                                    type="text" 
                                    value={this.state.name} 
                                    onChange={this.handleChange("name")} 
                                    className="modal-input"
                                    placeholder={this.props.server.name}
                                >
                                </input>
                            </label>
                            <br/>
                            <input className={`edit-modal-button ${this.state.name.length === 0 ? "button-down" : ""}`} 
                                    disabled={this.state.name.length === 0}
                                type="submit"
                                value="Save"
                                onClick={this.handleSubmit}
                            />
                            <p onClick={this.handleEditModal(false)} className="edit-modal-cancel">Cancel</p>
                        </form>
                    </div>
                </div>
                <div className={`modal-container ${ this.state.deleteModal ? "modal-show" : ""}`}>
                    <div className="delete-server-modal">
                        <p className="delete-modal-question">Are you sure you want to delete this server?</p>
                        <div className="delete-modal-buttons-container">
                            <p className="delete-modal-cancel" onClick={this.handleDeleteModal(false)}>Cancel</p>
                            <p className="delete-modal-button" onClick={this.handleDelete}>Delete</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServerDropdown;