import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch } from "react-router";
import LoginFormContainer from "./greeting/login_form_container";
import SignupFormContainer from "./greeting/signup_form_container";
import { AuthRoute } from "../util/route_util";
import UserIndexContainer from "./servers/user_index_container";

const App = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={GreetingContainer} />

                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                
                {/* <Route path="/servers/@me" /> */}
            </Switch>
            <Route exact path="/servers" component={UserIndexContainer} />
            <Route exact path="/servers/:serverId" component={UserIndexContainer}/>
            <Route path="/servers/:serverId/:channelId" component={UserIndexContainer} />
        </div>
    )
};

export default App;