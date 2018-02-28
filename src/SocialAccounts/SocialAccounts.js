import React from 'react';
import PropTypes from 'prop-types';
import git from './GitHub-Mark-32px.png';
import ig from './glyph-logo_May2016.png';
import linkedin from './In-2C-34px-R.png';
import twitter from './Twitter_Logo_Blue.png';
import ImageLink from './ImageLink';

const styles = {
  wrapper: {
    height: 32
  }
};
const SocialAccounts = props => {
  return (
    <div style={styles.wrapper}>
      <ImageLink href={props.twitter} image={twitter} />
      <ImageLink href={props.instagram} image={ig} />
      <ImageLink href={props.linkedin} image={linkedin} />
      <ImageLink href={props.github} image={git} />
    </div>
  );
};

SocialAccounts.propTypes = {
  twitter: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired
};

export default SocialAccounts;
