import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import FantasyFootball from './FantasyFootball/FantasyFootball';
import Toolbar from './Toolbar';

ReactDOM.render(
  <Router>
    <div>
      <Toolbar
        title="Matt Boatman"
        rightLinks={[
          { title: 'Home', link: '/' },
          { title: 'Fantasy Commissioner', link: 'fantasy-commissioner' }
        ]}
      />
      <Route exact path="/" component={App} />
      <Route exact path="/fantasy-commissioner" component={FantasyFootball} />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
