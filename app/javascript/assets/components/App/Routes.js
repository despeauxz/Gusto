/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/signup" render={props => <Auth {...props} type="signup" />} />
                <Route exact path="/login" render={props => <Auth {...props} type="login" />} />
                <Route exact path="/me" component={Dashboard} />
                <Route exact path="/settings" component={Settings} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
