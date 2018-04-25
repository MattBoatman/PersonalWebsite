import React, { Component } from 'react';
import TimeBlock from '../TimeBlock';
import ContentBlock from '../ContentBlock';
import { translate } from 'react-i18next';

const PersonalProjects = ({ t }) => {
  return (
    <ContentBlock
      backgroundColor="#b0bec5"
      color="#263238"
      title={t('projects.title')}
    >
      <TimeBlock
        place={
          <a href="http://playfulpets.s3-website-us-east-1.amazonaws.com/">
            Playful Pets
          </a>
        }
        title={t('projects.description')}
        link="http://playfulpets.s3-website-us-east-1.amazonaws.com/"
      />
    </ContentBlock>
  );
};

export default translate()(PersonalProjects);
