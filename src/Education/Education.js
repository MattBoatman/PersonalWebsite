import React from 'react';
import ContentBlock from '../ContentBlock';
import TimeBlock from '../TimeBlock';
import { translate } from 'react-i18next';

const Education = ({ t }) => {
  return (
    <ContentBlock
      backgroundColor="#EEEEEE"
      color="#E57373"
      title={t('education.title')}
    >
      <TimeBlock
        place="Ohio State University"
        duration={t('education.duration')}
        title="Computer Science & Engineering"
      />
    </ContentBlock>
  );
};

export default translate()(Education);
