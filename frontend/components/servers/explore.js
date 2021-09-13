import React from "react";

class Explore extends React.Component {

    render(){
        if (this.props.path !== "/servers/explore") return null
        return (
            <div className="discover-sidebar">
            </div>
        )
    }
}

export default Explore;