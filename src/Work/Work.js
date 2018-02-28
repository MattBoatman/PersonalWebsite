import React, { Component } from 'react';
import TimeBlock from '../TimeBlock';
import ContentBlock from '../ContentBlock';

class Work extends Component {
  render() {
    return (
      <ContentBlock
        backgroundColor="#E8EAF6"
        color="#00796B"
        title="Work History"
      >
        <TimeBlock
          place="Improving"
          duration="Nov 2017 - Present"
          title="Senior Consultant"
        />
        <TimeBlock
          place="Aver"
          duration="July 2017 - Nov 2017"
          title="Front-end Engineer"
        />
        <TimeBlock
          place="Capital One"
          duration="July 2014 - May 2017"
          title="Senior Software Engineer"
        />
      </ContentBlock>
    );
  }
}

export default Work;
