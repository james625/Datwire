import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch } from "react-router";
import LoginFormContainer from "./greeting/login_form_container";
import SignupFormContainer from "./greeting/signup_form_container";
import { AuthRoute, ProtectedAuthRoute } from "../util/route_util";
import UserIndexContainer from "./servers/user_index_container";

const App = () => {
    return(
        <div>
            {/* <Route path="/servers/@me" /> */}
            <Switch>
                <ProtectedAuthRoute path="/servers/:serverId/:channelId" component={UserIndexContainer} />
                <ProtectedAuthRoute path="/servers/explore" component={UserIndexContainer} />
                <ProtectedAuthRoute exact path="/servers/:serverId" component={UserIndexContainer}/>
                <ProtectedAuthRoute exact path="/servers" component={UserIndexContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <Route path="/" component={GreetingContainer} />
            </Switch>
        </div>
    )
};

export default App;