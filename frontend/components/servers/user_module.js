import React from "react";
import { Link } from "react-router-dom";

class UserModule extends React.Component {

    render() {
        return(
            <div className="user-module-container">
                <p className="user-module-username">
                    {this.props.user.username} #{this.props.user.id}
                </p>
                <Link to="/"><i className="fas fa-home"></i></Link>
                <i className="fas fa-sign-out-alt" onClick={this.props.logout}></i>
            </div>
        )
    }
}

export default UserModule;