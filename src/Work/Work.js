import React from 'react';
import TimeBlock from '../TimeBlock';
import ContentBlock from '../ContentBlock';
import LocalizedText from '../locales/LocalizedText';

const Work = ({ t }) => {
  return (
    <ContentBlock
      backgroundColor="#E8EAF6"
      color="#00796B"
      title={<LocalizedText text="work-history" />}
    >
      <TimeBlock
        place="Improving"
        duration={<LocalizedText text="work-improving-duration" />}
        title={<LocalizedText text="work-improving" />}
      />
      <TimeBlock
        place="Aver"
        duration={<LocalizedText text="work-aver-duration" />}
        title={<LocalizedText text="work-aver" />}
      />
      <TimeBlock
        place="Capital One"
        duration={<LocalizedText text="work-capitalone-duration" />}
        title={<LocalizedText text="work-capitalone" />}
      />
    </ContentBlock>
  );
};

export default Work;
