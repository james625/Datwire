import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {

    constructor(props){
        super(props)
        this.state = { modal: false, id: "" }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ id: e.currentTarget.value})
    }

    handleModal(field) {
        return e => {
            e.preventDefault();
            this.setState({ modal: field })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        if (parseInt(this.state.id)){
            if (parseInt(this.state.id) > this.props.currentUser.id) {
                this.props.createDmChannel({user1_id: this.props.currentUser.id, user2_id: parseInt(this.state.id) })
                // this.props.history.push(`/servers/@me/${this.props.currentUser.id}/${parseInt(this.state.id)}`)
                this.setState({ modal: false, id: "" })
            } else {
                this.props.createDmChannel({user2_id: this.props.currentUser.id, user1_id: parseInt(this.state.id) })
                // this.props.history.push(`/servers/@me/${parseInt(this.state.id)}/${this.props.currentUser.id}`)
                
            }
            this.setState({ modal: false, id: "" })
        }
    }

    render() {
        if (this.props.server) return null
        if (this.props.path === "/servers/explore") return null
        if (!this.props.dmChannels) return null
        return (
            <div className="dm-container">
                <div className="dm-container-header">
                    <p className="members-list-p">DIRECT MESSAGES</p>
                    <p id="plus" onClick={this.handleModal(true)}>+</p>
                </div>
                <ul className="channels-list">
                    {this.props.dmChannels.map( channel => {
                        return(
                            <li key={channel.id}>
                                <Link 
                                    to={`/servers/@me/${channel.user1_id}/${channel.user2_id}/${channel.id}`}
                                    className="channels-list-tag"
                                >
                                    {channel.user1_id === this.props.currentUser.id ? channel.user2.username : channel.user1.username}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div className={`modal-container ${ this.state.modal ? "modal-show" : ""}`}>
                    <div className="edit-channel-modal">
                        <form>
                            <p className="edit-modal-customize">Create DM</p>
                            <label><p className="modal-label">Please enter the ID # of the user you want to DM</p>
                                <input 
                                    type="text" 
                                    value={this.state.id} 
                                    onChange={this.handleChange} 
                                    className="channel-modal-input"
                                >
                                </input>
                            </label>
                            <br/>
                            <div className="create-dm-buttons">
                                <p onClick={this.handleModal(false)} className="edit-channel-modal-cancel create-dm-cancel">Cancel</p>
                                <button onClick={this.handleSubmit} className="edit-channel-modal-button create-dm-create">Create DM</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;