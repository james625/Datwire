import React from "react";

class Discover extends React.Component {

    render(){
        if (this.props.path !== "/servers/explore") return null
        return (
            <div className="discover-sidebar-header">
                <p className="discover-sidebar-title">Discover</p>
            </div>
        )
    }
}

export default Discover;