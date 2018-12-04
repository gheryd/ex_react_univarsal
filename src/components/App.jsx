import React from "react";
import {Route, Switch} from "react-router-dom";
import Page1 from "./Page1"
import Page2 from "./Page2"
import Page404 from "./Page404"

const App = ({message}) => {
    message = message || "no message in app";
    return (
        <div>
            <Switch>
                <Route exact path="/" component={() => <Page1 message={message} />} />
                <Route path="/page2" component={Page2} />
                <Route component={Page404} />
            </Switch>
        </div>
    )
}

export default App;
