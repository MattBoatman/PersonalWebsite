import React from "react";
import PropTypes from "prop-types";
import './ContentBlock.css';

const ContentBlock = props => {
  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color
      }}
      className="contentBlock"
    >
        <h2 style={{margin:0}}>{props.title}</h2>
      {props.children}
    </div>
  );
};

ContentBlock.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default ContentBlock;
