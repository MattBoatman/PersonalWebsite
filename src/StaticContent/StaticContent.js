import React from 'react';
import Avatar from '../Avatar';
import sqMe from '../MattBoatman_sq.JPG';
import us from '../US.svg';
import es from '../mx.svg';
import './StaticContent.css';
import { connect } from 'react-redux';
import LocalizedText from '../locales/LocalizedText';

class StaticContent extends React.Component {
  state = {
    clicked: 1
  };
  clickFlag = locale => {
    this.props.changeLocale(locale);
    this.setState(prevState => {
      return { clicked: prevState.clicked + 1 };
    });
  };

  render() {
    return (
      <div className="pageLeft">
        <div className="pageContent">
          <div className="avatarWrapper">
            <Avatar imageURL={sqMe} />
            <div className="about">
              <h1>
                {' '}
                <LocalizedText text="static-h1" />
              </h1>
            </div>
            <div className="flags">
              <img
                className="image"
                src={us}
                alt=""
                onClick={() => this.clickFlag('en')}
              />
              <img
                className="image"
                src={es}
                alt=""
                onClick={() => this.clickFlag('es')}
              />
              <div>
                <LocalizedText
                  text="trans"
                  replacementValue={this.state.clicked}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeLocale: locale => {
      dispatch({
        type: 'SET_LOCALE',
        locale
      });
    }
  };
};

export default connect(null, mapDispatchToProps)(StaticContent);
