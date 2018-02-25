import React from "react";
import Avatar from "../Avatar";
import sqMe from "../MattBoatman_sq.JPG";

const styles = {
  avatarWrapper: {
    width: "80%",
    marginTop: 20
  },
  pageLeft:{
    width: "50%",
    display: 'inline-block'
  },
  pageContent: {
    height: '93vh',
    borderRight: "1px solid #efdcd3",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  about: {
    textAlign: 'center'
  }
};
const StaticContent = () => {
  return (
    <div style={styles.pageLeft}>
    <div style={styles.pageContent}>
      <div style={styles.avatarWrapper}>
        <Avatar imageURL={sqMe} />
        <div style={styles.about} >
        <p>I'm Matt.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default StaticContent;
