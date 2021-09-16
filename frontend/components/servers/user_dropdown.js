import React from "react";

class UserDropdown extends React.Component {

    render() {
        if (this.props.path === "/servers/explore") return null
        if (this.props.server) return null
        return (
            <div className="user-dropdown-container">
                <div 
                    className="user-dropdown-container-div"
                    // onClick={this.handleDropdown(!this.state.dropdown)} 
                    // onBlur={this.handleDropdown(false)
                >
                    <p className="user-dropdown-name">{this.props.currentUser.username}</p>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
        )
    }
}

export default UserDropdown;