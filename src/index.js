import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Toolbar from './Toolbar';
import * as moment from 'moment';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import locale from './localeReducer';
const store = createStore(locale);

moment.locale('en');
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <div>
        <Toolbar title="Matt Boatman" />
        <Route exact path="/" component={App} />
      </div>
    </Provider>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
