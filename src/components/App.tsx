import * as React from 'react';
import { Route } from 'react-router';
import { Login } from './auth/Login';
import { Feature } from './Feature';

// interface InjectedProps {}

export const App: React.SFC = (props) =>
    <div>
        <h1>Title of App</h1>
        <Route path="/login" component={Login} />
        <Route path="/feature" component={Feature} />
    </div>;