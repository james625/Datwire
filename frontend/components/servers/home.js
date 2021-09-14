import React from "react";

class Home extends React.Component {

    render() {
        if (this.props.server) return null
        if (this.props.path === "/servers/explore") return null
        return (
            <div className="dm-container">
                <div className="dm-container-header">
                    <p className="members-list-p">DIRECT MESSAGES</p>
                    <p id="plus">+</p>
                </div>
            </div>
        )
    }
}

export default Home;