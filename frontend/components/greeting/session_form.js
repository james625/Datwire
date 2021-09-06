import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {

    constructor(props){
        super(props)
        this.state = { email: "", username: "", password: "" }
        this.handleSubmit = this.handleSubmit.bind(this)
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
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Email
                            <input type="text" value={this.state.email} onChange={this.handleChange("email")}></input>
                        </label>
                        <label>Password
                            <input type="password" value={this.state.password} onChange={this.handleChange("password")}></input>
                        </label>
                        <button>Login</button>
                    </form>
                    <Link to="/signup">Register</Link>
                </div>
            )
        } else {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Email
                            <input type="text" value={this.state.email} onChange={this.handleChange("email")}></input>
                        </label>
                        <label>Username
                            <input type="text" value={this.state.username} onChange={this.handleChange("username")}></input>
                        </label>
                        <label>Password
                            <input type="password" value={this.state.password} onChange={this.handleChange("password")}></input>
                        </label>
                        <button>Register</button>
                    </form>
                    <Link to="/login">Already have an account?</Link>
                </div>
            )
        }
        
    }
}

export default SessionForm;