import React from 'react';
import PropTypes from 'prop-types';
import ToolbarButtons from './ToolbarButtons';
import './Toolbar.css';

const styles = {
  toolbarWrapper: {
    borderBottom: '1px solid',
    display: 'flex',
    padding: 20
  }
};

const Toolbar = props => {
  return (
    <div style={styles.toolbarWrapper}>
      <span className="toolbar-title">{props.title}</span>
      <div className="rightLinks">
        {props.rightLinks &&
          props.rightLinks.map(elem => (
            <ToolbarButtons
              key={elem.title}
              title={elem.title}
              link={elem.link}
              id={elem.id}
            />
          ))}
      </div>
    </div>
  );
};

Toolbar.propTypes = {
  title: PropTypes.string.isRequired,
  rightLinks: PropTypes.arrayOf(PropTypes.object)
};

export default Toolbar;
