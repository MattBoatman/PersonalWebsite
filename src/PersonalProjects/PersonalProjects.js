import React, { Component } from 'react';
import TimeBlock from '../TimeBlock';
import ContentBlock from '../ContentBlock';

class PersonalProjects extends Component {
  render() {
    return (
      <ContentBlock backgroundColor="#b0bec5" color="#263238" title="Projects">
        <TimeBlock
          place={
            <a href="http://playfulpets.s3-website-us-east-1.amazonaws.com/">
              Playful Pets
            </a>
          }
          title="Local pet daycare website"
          link="http://playfulpets.s3-website-us-east-1.amazonaws.com/"
        />
      </ContentBlock>
    );
  }
}

export default PersonalProjects;
