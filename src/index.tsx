import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import { ActionTypes } from './actions/actionTypes';
import { TOKEN } from './store/constants';
import './index.less';

// just to check if user should be resigned in. Not a security check.
// JWT is used to verify server data
if (window.localStorage.getItem(TOKEN)) {
    store.dispatch({ type: ActionTypes.USER_AUTH });
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
	</Provider>,
    document.getElementById('app'),
);
