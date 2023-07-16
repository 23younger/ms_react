import React from "react";

// 非受控组件
/**
 * 必须手动操作DOM元素，setState实现不了
  文件上传 <input type='file' />
  某些富文本编辑器，需要传入DOM元素
 */

// 受控组件 vs 非受控组件
/**
 * 优先使用受控组件，符合React设计原则
  必须操作DOM时，再使用非受控组件
 */

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'tongyang',
      flag: true,
    }
    this.nameInputRef = React.createRef(); // 创建 ref
    this.fileInputRef = React.createRef()
  }

  alertName = () => {
    const elem = this.nameInputRef.current; // 通过ref 获取 dom 节点
    alert(elem.value)
  }

  alertFile = () => {
    const elem = this.fileInputRef.current
    alert(elem.files[0].name)
  }

  render() {
    // input defaultValue
    return <div>
      {/* 使用defaultValue而不是value，使用ref；使用value是受控组件 */}
      <input defaultValue={this.state.name} ref={this.nameInputRef} />
      {/* state不会随着改变 */}
      <span>state.name: {this.state.name}</span>
      <button onClick={this.alertName}>alert name</button>
      <br />

      <input type="checkbox" defaultChecked={this.state.flag} />

      <input type="file" ref={this.fileInputRef} />
      <button onClick={this.alertFile}>alert file</button>
    </div>
  }
}

export default App;