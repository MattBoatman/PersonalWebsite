import React, { Component } from 'react';
import ContentBlock from '../ContentBlock';
import LocalizedText from '../locales/LocalizedText';

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
      <ContentBlock
        backgroundColor="#FFFFFF"
        color="#1E1D32"
        title={<LocalizedText text="about-title" />}
      >
        <div style={styles.content}>
          <p>
            <LocalizedText text="about-p1" />
          </p>
          <p>
            <LocalizedText text="about-p2" />
          </p>
          <p>
            <LocalizedText text="about-p2" />
          </p>
        </div>
      </ContentBlock>
    );
  }
}

export default About;
