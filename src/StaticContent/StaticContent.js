import React from "react";
import Avatar from "../Avatar";
import sqMe from "../MattBoatman_sq.JPG";
import './StaticContent.css';


const StaticContent = () => {
  return (
    <div className="pageLeft">
    <div className="pageContent">
      <div className="avatarWrapper">
        <Avatar imageURL={sqMe} />
        <div className="about" >
        <p>I'm Matt.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default StaticContent;
