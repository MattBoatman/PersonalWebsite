import React, { Component } from 'react';
import ContentBlock from '../ContentBlock';
import { I18n } from 'react-i18next';

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
      <I18n>
        {t => (
          <ContentBlock
            backgroundColor="#FFFFFF"
            color="#1E1D32"
            title={t('about.title')}
          >
            <div style={styles.content}>
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>
          </ContentBlock>
        )}
      </I18n>
    );
  }
}

export default About;
