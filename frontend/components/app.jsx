import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route } from "react-router";
import LoginFormContainer from "./greeting/login_form_container";
import SignupFormContainer from "./greeting/signup_form_container";

const App = () => {
    return(
        <div>
            <h1>Datwire</h1>
            <GreetingContainer />

            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />
        </div>
    )
};

export default App;