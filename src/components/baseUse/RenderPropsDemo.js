import React from "react";
import PropTypes from "prop-types";

class Mouse extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0
    }
  }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (
      <div style={{ height: '500px' }} onMouseMove={this.handleMouseMove}>
        {/* 将当前state作为props，传递给render */}
        {this.props.render(this.state)}
      </div>
    )
  }
}

Mouse.prototype = {
  render: PropTypes.func.isRequired // 必须接收一个render属性
}

const App = (props) => {
  <div style={{ height: '500px' }}>
    <p>{props.a}</p>
    <Mouse render={
      // render是一个函数组件
      ({ x, y }) => <h1>The mouse position is ({x}, {y})</h1>
    } />
  </div>
}

export default App; // 返回高阶函数