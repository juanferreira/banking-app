import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import thunk from 'redux-thunk';
import reducers from './reducers/';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={hashHistory} routes={routes} />
	</Provider>
	, document.getElementById('application')
);