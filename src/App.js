import React, { Component } from "react";
import Toolbar from "./Toolbar";
import StaticContent from "./StaticContent";
import DynamicContent from './DynamicContent';


class App extends Component {
  render() {
    return (
      <div>
        <Toolbar
          title="Matt Boatman"
          rightLinks={["About", "Contact"]}
        />
        <StaticContent />
        <DynamicContent />
      </div>
    );
  }
}

export default App;
