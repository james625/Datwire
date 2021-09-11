import React from "react";

class ServerDropdown extends React.Component {

    constructor(props){
        super(props)
        this.state = { dropdown: false }
    }

    handleDropdown(field) {
        return e => {
            e.preventDefault();
            this.setState({ dropdown: field })
        }
    }

    render() {
        if (!this.props.server) return null
        return(
            <div 
                className="server-dropdown-container" 
                onClick={this.handleDropdown(!this.state.dropdown)} 
                onBlur={this.handleDropdown(false)}
            >
                <div>
                    <p className="server-dropdown-name">{this.props.server.name}</p>
                    <i class="fas fa-chevron-down"></i>
                </div>
            </div>
        )
    }
}

export default ServerDropdown;