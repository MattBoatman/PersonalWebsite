import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Toolbar from './Toolbar';

ReactDOM.render(
  <Router>
    <div>
      <Toolbar
        title="Matt Boatman"
        rightLinks={[
          { title: 'About' },
          { title: 'Work' },
          { title: 'Projects' },
          { title: 'Education' },
          { title: 'Contact' }
        ]}
      />
      <Route exact path="/" component={App} />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
