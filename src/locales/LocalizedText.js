import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class LocalizedText extends Component {
  replaceValue = () => {
    if (this.props.replacementValue) {
      const value =
        this.props.locales[this.props.locale][this.props.text] ||
        this.props.locales.en[this.props.text] ||
        '';
      return value.replace('<%>', this.props.replacementValue);
    }
  };
  render() {
    return (
      this.replaceValue() ||
      this.props.locales[this.props.locale][this.props.text] ||
      this.props.locales.en[this.props.text] ||
      ''
    );
  }
}

LocalizedText.propTypes = {
  text: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  locales: PropTypes.object.isRequired,
  replacementValue: PropTypes.string
};

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(LocalizedText);
