import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router";

const mSTP = (state, ownProps) => {
    return {
        loggedIn: Boolean(state.session.id),
        server: Boolean(state.entities.servers[ownProps.match.params.serverId])
    }
}

const Auth = ({ loggedIn, path, component: Component }) => {
    return (
        <Route 
        path={path} 
        render={props => (
            loggedIn ? <Redirect to="/servers/@me" /> : <Component {...props} />
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

const ProtectedServerAuth = ({ loggedIn, server, path, component: Component }) => {
    return (
        <Route 
        path={path}
        render={props => (
            loggedIn && server ? <Component {...props} /> : <Redirect to="/servers/@me" />
        )} />
    )
}

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedAuthRoute = withRouter(connect(mSTP)(ProtectedAuth));
export const ProtectedServerAuthRoute = withRouter(connect(mSTP)(ProtectedServerAuth));