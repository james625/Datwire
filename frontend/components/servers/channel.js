import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faCog } from '@fortawesome/free-solid-svg-icons';

class Channel extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: "", modal: false, editModal: false, modalInfo: {} }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleModal = this.handleModal.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleChange(field){
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createChannel(this.state, this.props.server);
        this.props.updateServer(this.props.server);
        this.setState({ name: "", modal: false });
    }

    handleModal(bool){
        return e => {
            e.preventDefault();
            this.setState({ modal: bool })
        }
    }

    handleEditModal(bool, channel){
        return e => {
            e.preventDefault();
            this.setState({ editModal: bool, modalInfo: channel })
        }
    }

    handleUpdate(e){
        e.preventDefault();
        this.props.updateChannel({ name: this.state.name, id: this.state.modalInfo.id });
        this.props.updateServer(this.props.server);
        this.setState({ editModal: false, name: "", modalInfo: {} })
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteChannel( { id: this.state.modalInfo.id });
        this.props.updateServer(this.props.server);
        this.setState({ editModal: false, name: "", modalInfo: {} })
    }

    render() {
        if (!this.props.server) return null
        return (
            <div className="channels-container">
                <div className="channels-container-header">
                    <p className="members-list-p">TEXT CHANNELS</p>
                    <p id="plus" onClick={this.handleModal(true)}>+</p>
                </div>
                <ul className="channels-list">
                    {this.props.server.channels.map(channel => {
                        return (<li key={channel.id}>
                                    <Link to={`/servers/${this.props.server.id}/${channel.id}`} className="channels-list-tag">
                                        <FontAwesomeIcon icon={faHashtag} id="hashtag"/>
                                        <p className="channel-name">{channel.name}</p>
                                        <FontAwesomeIcon icon={faCog} className="cog" onClick={this.handleEditModal(true, channel)} />
                                    </Link>
                                </li>)
                    })}
                </ul>
                <div className={`modal-container ${ this.state.modal ? "modal-show" : ""}`}>
                    <div className="modal">
                        <form onSubmit={this.handleSubmit}>
                            <p className="modal-x" onClick={this.handleModal(false)}>&times;</p>
                            <p className="modal-customize">Create Text Channel</p>
                            <label><p className="modal-label">CHANNEL NAME</p>
                                <input 
                                    type="text" 
                                    value={this.state.name} 
                                    onChange={this.handleChange("name")} 
                                    className="modal-input"
                                    placeholder="new-channel"
                                >
                                </input>
                            </label>
                            <br/>
                            <button className={`modal-button ${this.state.name.length === 0 ? "button-down" : ""}`} 
                                    disabled={this.state.name.length === 0}>Create Channel</button>
                        </form>
                    </div>
                </div>
                <div className={`modal-container ${ this.state.editModal ? "modal-show" : ""}`}>
                    <div className="edit-channel-modal">
                        <form>
                            <p className="edit-modal-customize">Channel Settings</p>
                            <label><p className="modal-label">CHANNEL NAME</p>
                                <input 
                                    type="text" 
                                    value={this.state.name} 
                                    onChange={this.handleChange("name")} 
                                    className="channel-modal-input"
                                    placeholder={this.state.modalInfo.name}
                                >
                                </input>
                            </label>
                            <br/>
                            <div id="edit-channel-button-cancel-container">
                                <p className="delete-channel-button" onClick={this.handleDelete}>Delete</p>
                                <p onClick={this.handleEditModal(false, {})} className="edit-channel-modal-cancel">Cancel</p>
                                <input className={`edit-channel-modal-button ${this.state.name.length === 0 ? "button-down" : ""}`} 
                                        disabled={this.state.name.length === 0}
                                    type="submit"
                                    value="Save"
                                    onClick={this.handleUpdate}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Channel;