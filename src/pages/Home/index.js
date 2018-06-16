import React, { Component } from 'react';
import StaticContent from '../../views/StaticContent';
import DynamicContent from '../../views/DynamicContent';
import { Helmet } from 'react-helmet';

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Matt Boatman</title>
          <meta
            name="description"
            content="Software Engineer Matt Boatman, located in Columbus, Ohio. Specializing in front-end frameworks like React and Angular."
          />
          <meta property="og:url" content="http://matthewboatman.com" />
          <meta
            property="og:title"
            content="Matt Boatman | Software Engineer"
          />
          <meta name="author" content="Matt Boatman" />
        </Helmet>
        <StaticContent />
        <DynamicContent />
      </div>
    );
  }
}

export default Home;
