import React from "react";
import { Link } from "react-router-dom";
import UserIndexItem from "./user_index_item";

class UserIndex extends React.Component {
    constructor(props){
        super(props)
        this.state = { name: "" }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchUserServers(this.props.currentUser.id)
    }

    handleChange(field){
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.createServer(this.state)
        this.setState({ name: "" })
    }

    render() {
        return(
            <div>
                <button onClick={this.props.logout}>Log out</button>
                <ul>
                    {this.props.servers.map( server => {
                        return <UserIndexItem key={server.id} server={server} />
                    })}
                    <button>Add a Server</button>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.name} onChange={this.handleChange("name")}></input>
                        <button>Create</button>
                    </form>
                </ul>
            </div>
        )
    }
}

export default UserIndex