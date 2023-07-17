import React from "react";

// 高阶组件 HOC
const withMouse = (Component) => {
  // 高阶组件不是一种功能 而是一种模式
  // 定义多个组件的公共逻辑
  class withMouseComponent extends React.Component {
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
          {/* 1、遗传所有props (Vue $props v-bind) 2、增加mouse属性 */}
          <Component {...this.props} mouse={this.state} />
        </div>
      )
    }
  }
  return withMouseComponent;
} 

const App = (props) => {
  const { a } = props;
  const { x, y } = props.mouse // 接收 mouse 属性
  return (
    <div>
      <h1>The mouse position is ({x}, {y})</h1>
      <p>{ a }</p>
    </div>
  )
}

export default withMouse(App); // 返回高阶函数