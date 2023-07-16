import React from "react";
import ReactDOM from "react-dom";
// import './style.css'

// 使用场景
/**
 * 父组件overflow：hidden，会隐藏子组件，需要逃离
  父组件z-index值太小
  fixed需要放在body第一层级 
 */
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    // 正常渲染
    // return <div className="modal">
    //   {this.props.children} {/* 类似于Vue slot */}
    // </div>

    // 使用Portals渲染到body上
    // fixed元素要放在body上，有更好的浏览器兼容性
    // .modal {
    //   position: fixed
    // }
    return ReactDOM.createPortal(
      <div className="modal">{this.props.children}</div>,
      document.body // DOM节点，放在body第一层
    )
  }
}

export default App;