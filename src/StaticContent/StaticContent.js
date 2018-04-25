import React from 'react';
import Avatar from '../Avatar';
import sqMe from '../MattBoatman_sq.JPG';
import us from '../US.svg';
import es from '../mx.svg';
import './StaticContent.css';
import { I18n } from 'react-i18next';

const StaticContent = () => {
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
                  onClick={() => i18n.changeLanguage('us')}
                />
                <img
                  className="image"
                  src={es}
                  onClick={() => i18n.changeLanguage('es')}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </I18n>
  );
};

export default StaticContent;
