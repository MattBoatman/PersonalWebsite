import React, { Component } from 'react';
import ContentBlock from '../ContentBlock';

const styles = {
  content: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '22px',
    padding: 0,
    margin: 0
  }
};
class About extends Component {
  render() {
    return (
      <ContentBlock backgroundColor="#FFFFFF" color="#1E1D32" title="About">
        <div style={styles.content}>
          <p>
            I'm Matt Boatman, a software engineer living in Columbus, Ohio. I
            work as a Senior Consultant for Improving.
          </p>
          <p>
            I'm happily married to my wonderful wife, Julie, who is a resident
            physician at Mount Carmel West hospital. We are proud dog parents to
            the cutest dog in the whole world, Belle.
          </p>
          <p>
            In my free time I love to cook, garden, drink coffee in the morning
            and beer at night, play video or board games, and eating good food.
          </p>
        </div>
      </ContentBlock>
    );
  }
}

export default About;
