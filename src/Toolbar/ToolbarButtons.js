import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

const styles = {
  button: {
    background: 'none',
    border: 'none',
    color: '#efdcd3',
    fontSize: 13,
    letterSpacing: '.15em',
    textTransform: 'uppercase',
    cursor: 'pointer'
  }
};
const ToolbarButtons = props => {
  const onClickHandler = () => {
    props.history.push(props.link);
  };
  return (
    <button style={styles.button} onClick={onClickHandler}>
      {props.title}
    </button>
  );
};

ToolbarButtons.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default withRouter(ToolbarButtons);
