import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  wrapper: {
    borderRadius: '50%',
    width: '100%'
  }
};
const Avatar = props => {
  return <img style={styles.wrapper} src={props.imageURL} alt="Matt Boatman" />;
};

Avatar.propTypes = {
  imageURL: PropTypes.string.isRequired
};

export default Avatar;
