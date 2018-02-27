import React from "react";
import PropTypes from "prop-types";
import "./TimeBlock.css";

const TimeBlock = props => {
  return (
    <div>
      <div className="header">
        <span><b>{props.place}</b></span>
        <span className="smallerText">{props.duration}</span>
      </div>
        <p className="title smallerText">{props.title}</p>
    </div>
  );
};

TimeBlock.propTypes = {
  place: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default TimeBlock;
