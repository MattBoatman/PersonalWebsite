import React from 'react';
import PropTypes from 'prop-types';
import ToolbarButtons from './ToolbarButtons';
import LocalizedText from '../locales/LocalizedText';

const styles = {
  toolbarWrapper: {
    borderBottom: '1px solid',
    display: 'flex',
    padding: 20
  },
  title: {
    fontSize: 18,
    textTransform: 'uppercase',
    marginRight: 'auto',
    letterSpacing: '.15em'
  },
  rightLinks: {}
};

const Toolbar = props => {
  return (
    <div style={styles.toolbarWrapper}>
      <span style={styles.title}>{props.title}</span>
      <div style={styles.rightLinks}>
        {props.rightLinks &&
          props.rightLinks.map(elem => (
            <ToolbarButtons
              key={elem.link}
              title={elem.title}
              link={elem.link}
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
