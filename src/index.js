import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Resume from './pages/Resume';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Toolbar from './components/Toolbar';

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
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/resume" component={Resume} /> */}
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
