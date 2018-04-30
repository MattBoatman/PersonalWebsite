import React from 'react';
import TimeBlock from '../TimeBlock';
import ContentBlock from '../ContentBlock';
import { translate } from 'react-i18next';

const Work = ({ t }) => {
  return (
    <ContentBlock
      backgroundColor="#E8EAF6"
      color="#00796B"
      title={t('work:history')}
    >
      <TimeBlock
        place="Improving"
        duration={t('work:improving-duration')}
        title={t('work:improving')}
      />
      <TimeBlock
        place="Aver"
        duration={t('work:aver-duration')}
        title={t('work:aver')}
      />
      <TimeBlock
        place="Capital One"
        duration={t('work:capitalone-duration')}
        title={t('work:capitalone')}
      />
    </ContentBlock>
  );
};

export default translate('work')(Work);
