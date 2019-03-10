import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Thrice from './pages/Thrice';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/thrice" component={Thrice} />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
