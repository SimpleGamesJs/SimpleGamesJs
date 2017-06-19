import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { configureStore } from 'stores/RootReducer';
import App from 'containers/App';
import Main from 'containers/Main';

window.__PRODUCTION__ = __PRODUCTION__;

const store		= configureStore(hashHistory, window.__initialState__);
const history	= syncHistoryWithStore(hashHistory, store);

render(
	<Provider store={store}>
		<Router history={ history }>
			<Route path="/" component={ App }>
				<IndexRedirect to='/home' />
				<Route path="/home" component={ Main } />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);