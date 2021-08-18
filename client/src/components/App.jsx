import React, {Fragment,} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom';
import {
    LandingPage,
} from '../pages';
import DateFnstUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import '../css/styles.css';

export default function App() {
    return (
        <MuiPickersUtilsProvider utils={DateFnstUtils}>
            <Router>
                <Fragment>
                    <Switch>
                        <Route path='/' exact component={LandingPage} />
                    </Switch>
                </Fragment>
            </Router>
        </MuiPickersUtilsProvider>
    )
}
