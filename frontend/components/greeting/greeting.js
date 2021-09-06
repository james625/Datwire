import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {

    render() {
        if (this.props.currentUser) {
            return (
                <div>
                    Welcome {this.props.currentUser.username}!
                    <button onClick={this.props.logout}>Log out</button>
                </div>
            )
        } else {
            return (
                <div>
                    <Link to="/login">Login</Link>
                    <br></br>
                    <Link to="/signup">Register</Link>
                </div>
            )
        }
        
    }
}

export default Greeting;