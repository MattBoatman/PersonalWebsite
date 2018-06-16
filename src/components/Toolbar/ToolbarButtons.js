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
    if (props.link) {
      props.history.push(props.link);
    } else {
      document
        .getElementById(props.title)
        .scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <button
      style={styles.button}
      onClick={onClickHandler}
      href={`#${props.title}`}
    >
      {props.title}
    </button>
  );
};

ToolbarButtons.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default withRouter(ToolbarButtons);
