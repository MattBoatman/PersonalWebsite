import React, { Component } from 'react';
import About from '../About';
import Work from '../Work';
import Education from '../Education';
import Contact from '../Contact';
import './DynamicContent.css';

class DynamicContent extends Component {
  render() {
    return (
      <div className="dynamicContent">
        <About />
        <Work />
        <Education />
        <Contact />
      </div>
    );
  }
}

export default DynamicContent;
