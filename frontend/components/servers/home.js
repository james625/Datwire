import React from "react";

class Home extends React.Component {

    render() {
        if (this.props.server) return null
        if (this.props.path === "/servers/explore") return null
        return (
            <div className="dm-container">
                this is home
            </div>
        )
    }
}

export default Home;