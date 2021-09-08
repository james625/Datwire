import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {

    constructor(props){
        super(props)
        this.state = { email: "", username: "", password: "" }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    handleChange(field){
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.setState({ email: "", username: "", password: "" })
        this.props.processForm(user);
    }

    render(){
        if (this.props.formType === "login"){
            return (
                <div className="splash">
                    <div className="session-form">
                        <h3>Welcome back!</h3>
                        <p className="excited">We're so excited to see you again!</p>
                        <form onSubmit={this.handleSubmit}>
                            <label>EMAIL <i className="errors">{this.props.errors[0]}</i>
                                <br/>
                                <input type="text" value={this.state.email} onChange={this.handleChange("email")}></input>
                            </label>
                            <br/>
                            <label>PASSWORD <i className="errors">{this.props.errors[0]}</i>
                                <br/>
                                <input type="password" value={this.state.password} onChange={this.handleChange("password")}></input>
                            </label>
                            <br/>
                            <button>Login</button>
                        </form>
                        <button>Demo User</button>
                        <p className="account">Need an account? <Link to="/signup" className="register">Register</Link></p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="splash">
                    <div className="session-form">
                        <form onSubmit={this.handleSubmit}>
                            <h3 className="create">Create an account</h3>
                            <label>EMAIL
                                <input type="text" value={this.state.email} onChange={this.handleChange("email")}></input>
                            </label>
                            <label>USERNAME
                                <input type="text" value={this.state.username} onChange={this.handleChange("username")}></input>
                            </label>
                            <label>PASSWORD
                                <input type="password" value={this.state.password} onChange={this.handleChange("password")}></input>
                            </label>
                            <button>Continue</button>
                        </form>
                        <Link to="/login" className="register">Already have an account?</Link>
                    </div>
                </div>
            )
        }
        
    }
}

export default SessionForm;