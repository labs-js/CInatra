import 'babel-polyfill'; // generators
import React from 'react';
import {
  createStore
} from 'redux'
import {
  Provider
} from 'react-redux';
import ReactDOM from 'react-dom'
import App from './containers/App';
import mainView from './containers/mainView';
import reducers from './reducers/';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router'

const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={mainView} />
          </Route>
        </Router>
    </Provider>,
  document.getElementById('root')
);
