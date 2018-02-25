import React from "react";
import PropTypes from "prop-types";

const styles = {
  button: {
    background: "none",
    border: "none",
    color: "#efdcd3",
    fontSize: 13,
    letterSpacing: ".15em",
    textTransform: "uppercase",
    cursor: 'pointer',
  }
};
const ToolbarButtons = props => {
  return (
    <button style={styles.button}>
      {props.button}
    </button>
  );
};

ToolbarButtons.propTypes = {
  button: PropTypes.string.isRequired
};

export default ToolbarButtons;
