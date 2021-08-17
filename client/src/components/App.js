import React, { Component, Fragment } from 'react';
import '../css/styles.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import {
    LandingPage
} from '../pages';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route path='/' exact component={LandingPage} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default App;
