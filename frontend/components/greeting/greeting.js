import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {

    render() {
        if (this.props.currentUser) {
            return (
                <div className="home-container">
                    <nav className="home-nav">
                        <img src={window.logo} className="logo"/>
                        <p><a href="https://github.com/james625">Github</a></p>
                        <button onClick={this.props.logout} className="login-button">Log out</button>
                    </nav>
                    <div className="first-container">
                        <img src={window.firstcontainer1} className="fci-1"/>
                        <div className="first-container-1">
                            <h1>IMAGINE A PLACE...</h1>
                            <p>
                                   ...where you can belong to a school club, a gaming group, or a worldwide art 
                                community. Where just you and a handful of friends can spend time together. A place 
                                   that makes it easy to talk every day and hang out more often.
                            </p>
                        </div>
                        <img src={window.firstcontainer2} className="fci-2"/>
                    </div>
                    <div className="second-container">
                        <img src={window.secondcontainer} />
                        <div className="second-container-1">
                            <h2>Create an invite-only place where you belong</h2>
                            <p>
                                Discord servers are organized into topic-based 
                                channels where you can collaborate, share, and 
                                just talk about your day without clogging up a 
                                group chat.
                            </p>
                        </div>
                    </div>
                    <div className="third-container">
                        <div className="third-container-1">
                            <h2>Where hanging out is easy</h2>
                            <p>
                                Grab a seat in a voice channel when you’re free. 
                                Friends in your server can see you’re around and 
                                instantly pop in to talk without having to call.
                            </p>
                        </div>
                        <img src={window.thirdcontainer} />
                    </div>
                    <div className="fourth-container">
                        <img src={window.fourthcontainer} />
                        <div className="fourth-container-1">
                            <h2>From few to a fandom</h2>
                            <p>
                                Get any community running with moderation tools and 
                                custom member access. Give members special powers, 
                                set up private channels, and more.
                            </p>
                        </div>
                    </div>
                    <div className="fifth-container">
                        <h2>RELIABLE TECH FOR STAYING CLOSE</h2>
                        <p>
                            Low-latency voice and video feels like you’re in the 
                            same room. Wave hello over video, watch friends stream 
                            their games, or gather up and have a drawing session with 
                            screen share.
                        </p>
                        <img src={window.fifthcontainer} />
                        <img src={window.startbg} />
                        <h2>Ready to start your journey?</h2>
                    </div>
                    <div className="sixth-container">
                        <h2>IMAGINE A PLACE</h2>
                        <p><a href="https://github.com/james625">Github</a></p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="home-container">
                    <nav className="home-nav">
                        <img src={window.logo} className="logo"/>
                        <p><a href="https://github.com/james625">Github</a></p>
                        <button className="login-button"><Link to="/login" className="login-link">Login</Link></button>
                    </nav>
                    <div className="first-container">
                        <img src={window.firstcontainer1} className="fci-1"/>
                        <div className="first-container-1">
                            <h1>IMAGINE A PLACE...</h1>
                            <p>
                                   ...where you can belong to a school club, a gaming group, or a worldwide art 
                                community. Where just you and a handful of friends can spend time together. A place 
                                   that makes it easy to talk every day and hang out more often.
                            </p>
                        </div>
                        <img src={window.firstcontainer2} className="fci-2"/>
                    </div>
                    <div className="second-container">
                        <img src={window.secondcontainer} />
                        <div className="second-container-1">
                            <h2>Create an invite-only place where you belong</h2>
                            <p>
                                Discord servers are organized into topic-based 
                                channels where you can collaborate, share, and 
                                just talk about your day without clogging up a 
                                group chat.
                            </p>
                        </div>
                    </div>
                    <div className="third-container">
                        <div className="third-container-1">
                            <h2>Where hanging out is easy</h2>
                            <p>
                                Grab a seat in a voice channel when you’re free. 
                                Friends in your server can see you’re around and 
                                instantly pop in to talk without having to call.
                            </p>
                        </div>
                        <img src={window.thirdcontainer} />
                    </div>
                    <div className="fourth-container">
                        <img src={window.fourthcontainer} />
                        <div className="fourth-container-1">
                            <h2>From few to a fandom</h2>
                            <p>
                                Get any community running with moderation tools and 
                                custom member access. Give members special powers, 
                                set up private channels, and more.
                            </p>
                        </div>
                    </div>
                    <div className="fifth-container">
                        <h2>RELIABLE TECH FOR STAYING CLOSE</h2>
                        <p>
                            Low-latency voice and video feels like you’re in the 
                            same room. Wave hello over video, watch friends stream 
                            their games, or gather up and have a drawing session with 
                            screen share.
                        </p>
                        <img src={window.fifthcontainer} />
                        <img src={window.startbg} />
                        <h2 className="start-journey">Ready to start your journey?</h2>
                    </div>
                    <div className="sixth-container">
                        <h2>IMAGINE A PLACE</h2>
                        <p><a href="https://github.com/james625">Github</a></p>
                        <button className="signup-button"><Link to="/signup" className="signup-link">Sign up</Link></button>
                    </div>
                </div>
                    
                    
            )
        }
        
    }
}

export default Greeting;