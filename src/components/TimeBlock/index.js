import React from 'react';
import PropTypes from 'prop-types';
import './TimeBlock.css';
import ImageLink from '../SocialAccounts/ImageLink';
import link from './link.png';

const TimeBlock = props => {
  return (
    <div>
      <div className="header">
        <span>
          <b>{props.place}</b>
        </span>
        {props.duration && (
          <span className="smallerText">{props.duration}</span>
        )}
        {props.link && (
          <span className="iconLink">
            <ImageLink
              image={link}
              href={props.link}
              alt="Playful Pets website"
            />
          </span>
        )}
      </div>
      {props.title && <p className="title smallerText">{props.title}</p>}
    </div>
  );
};

TimeBlock.propTypes = {
  place: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  duration: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  link: PropTypes.string
};

export default TimeBlock;
