import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {

    constructor(props){
        super(props)
        this.state = { email: "", username: "", password: "" }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemo = this.handleDemo.bind(this)
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

    handleDemo(e) {
        e.preventDefault();
        const user = {email: "demouser@demouser", password: "password"}
        this.props.processForm(user);
    }

    render(){
        debugger
        if (this.props.formType === "login"){
            return (
                <div className="splash">
                    <div className="session-form">
                        <h3 className="welcome">Welcome back!</h3>
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
                            <button className="session-form-button">Login</button>
                        </form>
                        <button className="session-form-button" onClick={this.handleDemo}>Demo User</button>
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
                                <input type="email" value={this.state.email} onChange={this.handleChange("email")} required={true}></input>
                            </label>
                            <label>USERNAME <i className="errors">{this.props.errors[0]}</i>
                                <input type="text" value={this.state.username} onChange={this.handleChange("username")}></input>
                            </label>
                            <label>PASSWORD <i className="errors">{this.props.errors[0]}</i>
                                <input type="password" value={this.state.password} onChange={this.handleChange("password")}></input>
                            </label>
                            <button className="session-form-button">Continue</button>
                        </form>
                        <Link to="/login" className="register">Already have an account?</Link>
                    </div>
                </div>
            )
        }
        
    }
}

export default SessionForm;