import React from "react";
import EventDemo from "./EventDemo";
import ContextDemo from "./ContextDemo";
import LazyDemo from "./LazyDemo";

class BaseUse extends React.Component {
  render() {
    return <div>
      {/* <EventDemo />
      <ContextDemo /> */}
      <LazyDemo />
    </div>
  }
}

export default BaseUse;