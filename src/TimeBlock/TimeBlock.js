import React from "react";
import PropTypes from "prop-types";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 0 2px",
    margin: 0,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "22px"
  },
  smallerText: {
      fontSize: 14,
  },
  title: {
      margin: 0
  }
};
const TimeBlock = props => {
  return (
    <div>
      <div style={styles.header}>
        <span>{props.place}</span>
        <span style={styles.smallerText}>{props.duration}</span>
      </div>
        <p style={{...styles.title, ...styles.smallerText}}>{props.title}</p>
    </div>
  );
};

TimeBlock.propTypes = {
  place: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default TimeBlock;
