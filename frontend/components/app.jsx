import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch } from "react-router";
import LoginFormContainer from "./greeting/login_form_container";
import SignupFormContainer from "./greeting/signup_form_container";
import { AuthRoute } from "../util/route_util";

const App = () => {
    return(
        <div>
            <h1>Datwire</h1>
            <Switch>
                <Route exact path="/" component={GreetingContainer} />

                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
            </Switch>
        </div>
    )
};

export default App;