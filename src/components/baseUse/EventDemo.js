import React from "react";

class EventDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'zhangsan'
    }

    // 1、修改方法的 this 指向
    this.clickHandler1 = this.clickHandler1.bind(this)
  }

  clickHandler1() {
    // 3、没执行1 bind操作， this默认是undefined
    this.setState({
      name: 'lisi'
    })
  }

  // 4、使用箭头函数，静态方法，固定this指向当前实例
  // 补充：箭头函数的this指向取决于定义时，指向该函数外的this，即当前实例
  clickHandler2 = () => {
    this.setState({
      name: 'lisi'
    })
  }

  // 5、获取event
  clickHandler3 = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('target', event.target); // 指向当前元素，即当前元素触发
    console.log('current target', event.currentTarget); // 指向当前元素，假象！

    // 注意：event其实是React封装的。不是原生的Event，是SyntheticEvent（组合式事件）
    console.log('event', event);

    console.log('nativeEvent', event.nativeEvent); // 获取原生的event
    console.log('nativeEvent', event.nativeEvent.target); // 获取原生的event
    console.log('nativeEvent', event.nativeEvent.currentTarget); // v17+ 指向root根节点 v16- 绑定到document上

    // event 是 SyntheticEvent，模拟出了 DOM 事件所有能力
    // event.nativeEvent 是原生事件对象
    // 所有的事件，都被挂载到document上
    // 和DOM事件不一样，和Vue事件也不一样

    // React17事件绑定到root上
    // 16绑定到的是document上
    // 17后绑定到root组件上
    // 有利于多个React版本并存，例如微前端，如果都绑定到document上容易造成混乱，一个react框架绑定对应一个root上，就可以分开了
  }

  clickHandler4 = (param1, param2, event) => {
    console.log(param1, param2, event)
  }

  render() {
    // 2、也可以直接使用 onClick={this.clickHandler1.bind(this)}
    // 但相对于1 不好的一点是每次点击都会执行bind，1是直接已经bind了的
    return <p onClick={this.clickHandler1}>
      {this.state.name}
      <a href="www.baidu.com" onClick={this.clickHandler3}>点击一下</a>
      <label htmlFor="inputName">姓名</label>
      <input id="inputName" />
    </p>
  }
}

export default EventDemo;