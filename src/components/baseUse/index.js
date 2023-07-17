import React from "react";
import EventDemo from "./EventDemo";
import ContextDemo from "./ContextDemo";
import LazyDemo from "./LazyDemo";
import HOCDemo from "./HOCDemo";
import RenderPropsDemo from "./RenderPropsDemo";

class BaseUse extends React.Component {
  render() {
    return <div>
      {/* <EventDemo />
      <ContextDemo />
      <LazyDemo />
      <HOCDemo a='100' /> */}
      <RenderPropsDemo a='200' />
    </div>
  }
}

export default BaseUse;