import React from 'react';
import ContentBlock from '../ContentBlock';
import TimeBlock from '../TimeBlock';
import LocalizedText from '../locales/LocalizedText';

const Education = ({ t }) => {
  return (
    <ContentBlock
      backgroundColor="#EEEEEE"
      color="#E57373"
      title={<LocalizedText text="education-title" />}
    >
      <TimeBlock
        place="Ohio State University"
        duration={<LocalizedText text="education-duration" />}
        title="Computer Science & Engineering"
      />
    </ContentBlock>
  );
};

export default Education;
