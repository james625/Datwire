import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router";

const mSTP = state => {
    return {
        loggedIn: Boolean(state.session.id)
    }
}

const Auth = ({ loggedIn, path, component: Component }) => {
    return (
        <Route 
        path={path} 
        render={props => (
            loggedIn ? <Redirect to="/servers" /> : <Component {...props} /> 
        )} />
    )
}

const ProtectedAuth = ({ loggedIn, path, component: Component }) => {
    return (
        <Route 
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/" />
        )} />
    )
}

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedAuthRoute = withRouter(connect(mSTP)(ProtectedAuth));