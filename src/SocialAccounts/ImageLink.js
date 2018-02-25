import React from "react";
import PropTypes from "prop-types";
const styles = {
  wrapper: {
    cursor: "pointer",
    padding: '0 15px 0 0'
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  }
};
const ImageLink = props => {
  return (
    <a style={styles.wrapper} href={props.href} target="_blank">
      <img alt="Social Accounts" style={styles.image} src={props.image} />
    </a>
  );
};

ImageLink.propTypes = {
  href: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default ImageLink;
