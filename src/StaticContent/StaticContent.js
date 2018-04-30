import React from 'react';
import Avatar from '../Avatar';
import sqMe from '../MattBoatman_sq.JPG';
import us from '../US.svg';
import es from '../mx.svg';
import './StaticContent.css';
import { I18n, Trans } from 'react-i18next';
import i18n from 'i18next';

class StaticContent extends React.Component {
  state = {
    clicked: 0
  };
  clickFlag = locale => {
    i18n.changeLanguage(locale);
    this.setState(prevState => {
      return { clicked: prevState.clicked + 1 };
    });
  };

  render() {
    return (
      <I18n>
        {(t, { i18n }) => (
          <div className="pageLeft">
            <div className="pageContent">
              <div className="avatarWrapper">
                <Avatar imageURL={sqMe} />
                <div className="about">
                  <h1>{t('static.h1')}</h1>
                </div>
                <div className="flags">
                  <img
                    className="image"
                    src={us}
                    alt=""
                    onClick={() => this.clickFlag('en')}
                  />
                  <img
                    className="image"
                    src={es}
                    alt=""
                    onClick={() => this.clickFlag('es')}
                  />
                  <div>
                    <Trans i18nKey="trans" count={this.state.clicked}>
                      You changed the <strong> language </strong>{' '}
                      {{ count: this.state.clicked }} times
                    </Trans>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </I18n>
    );
  }
}

export default StaticContent;
