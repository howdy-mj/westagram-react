import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Mainpage from './Pages/Main/Mainpage'

class Routes extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path ="/login" component={Login} />
                    <Route exact path ="/main" component={Mainpage} />
                </Switch>

            </Router>
        );
    }
}

export default Routes;