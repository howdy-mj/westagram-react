import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Login from './Pages/Login';
import Mainpage from './Pages/Mainpage'

class Routes extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path ="/signin" component={Login} />
                    <Route exact path ="/main" component={Mainpage} />
                </Switch>

            </Router>
        );
    }
}

export default Routes;