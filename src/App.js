import React, { Component } from 'react';
import StaticContent from './StaticContent';
import DynamicContent from './DynamicContent';

class App extends Component {
  render() {
    return (
      <div>
        <StaticContent />
        <DynamicContent />
      </div>
    );
  }
}

export default App;
