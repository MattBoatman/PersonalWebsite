import './i18n';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Toolbar from './Toolbar';
import * as moment from 'moment';
moment.locale('en');
ReactDOM.render(
  <Router>
    <div>
      <Toolbar title="Matt Boatman" />
      <Route exact path="/" component={App} />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
