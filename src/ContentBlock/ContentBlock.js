import React from "react";
import PropTypes from "prop-types";

const ContentBlock = props => {
  return (
    <div
      style={{
        padding: 64,
        backgroundColor: props.backgroundColor,
        color: props.color
      }}
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
