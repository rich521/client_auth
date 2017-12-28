import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

import './less/main.less';


ReactDOM.render(
    <Provider store={store}>
        <div className="app_container">
            <h1>header</h1>
        </div>
	</Provider>,
    document.getElementById("app"),
);
