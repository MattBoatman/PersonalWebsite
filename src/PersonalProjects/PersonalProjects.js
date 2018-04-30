import React from 'react';
import TimeBlock from '../TimeBlock';
import ContentBlock from '../ContentBlock';
import LocalizedText from '../locales/LocalizedText';

const PersonalProjects = ({ t }) => {
  return (
    <ContentBlock
      backgroundColor="#b0bec5"
      color="#263238"
      title={<LocalizedText text="projects-title" />}
    >
      <TimeBlock
        place={
          <a href="http://playfulpets.s3-website-us-east-1.amazonaws.com/">
            Playful Pets
          </a>
        }
        title={<LocalizedText text="projects.description" />}
        link="http://playfulpets.s3-website-us-east-1.amazonaws.com/"
      />
    </ContentBlock>
  );
};

export default PersonalProjects;
