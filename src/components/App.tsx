import * as React from 'react';
import { Switch, Route } from 'react-router';
import { Login } from './auth/Login';
import { Signup } from './auth/Signup';
import { RequireAuth } from './auth/RequireAuth';
import { Feature } from './Feature';
import { Welcome } from './Welcome';
// interface InjectedProps {}

export const App: React.SFC = (props): any => {
    console.log(props);
    return [
        <h1 key="A1">Title of App</h1>,
        <Switch key="A2">
            <Route exact path="/" component={Welcome} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/feature" component={RequireAuth(Feature)} />
        </Switch>
    ];
}