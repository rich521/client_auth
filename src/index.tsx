import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App';
import './index.less';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
        </Router>
	</Provider>,
    document.getElementById('app'),
);
