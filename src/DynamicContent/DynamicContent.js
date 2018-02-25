import React, { Component } from "react";
import About from "../About";
import Work from "../Work";
import Education from "../Education";
import Contact from "../Contact";

const styles = {
  pageRight: {
    width: "50%",
    height: "93vh",
    display: "inline-block",
    position: "absolute",
    overflow: 'auto',
    fontFamily: "'Roboto Mono', monospace",
  }
};
class DynamicContent extends Component {
  render() {
    return (
      <div style={styles.pageRight}>
        <About />
        <Work />
        <Education />
        <Contact />
      </div>
    );
  }
}


export default DynamicContent;
