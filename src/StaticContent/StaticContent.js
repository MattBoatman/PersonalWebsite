import React from 'react';
import Avatar from '../Avatar';
import sqMe from '../MattBoatman_sq.JPG';
import './StaticContent.css';

const StaticContent = () => {
  return (
    <div className="pageLeft">
      <div className="pageContent">
        <div className="avatarWrapper">
          <Avatar imageURL={sqMe} />
          <div className="about">
            <h1>I'm Matt Boatman.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticContent;
