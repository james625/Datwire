import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';

class Channel extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: "", modal: false }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleModal = this.handleModal.bind(this)
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
                                    <Link to={`/servers/${this.props.server.id}/${channel.id}`} className="channels-list-item">
                                        <FontAwesomeIcon icon={faHashtag} id="hashtag"/>
                                        <p className="channel-name">{channel.name}</p>
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
            </div>
        )
    }
}

export default Channel;