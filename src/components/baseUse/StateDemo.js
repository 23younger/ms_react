import React from "react";


// 重点
// 不可变值
// 可能是异步更新
// 可能会被合并
class StateDemo extends React.Component {
  constructor(props) {
    super(props)

    // 第一，state要在构造函数中定义
    this.state = {
      count: 0
    }
  }

  increase = () => {
    // 第二，不要直接修改state，使用不可变值
    // this.state.count++  // 错误
    this.setState({
      count: this.state.count + 1
    }, () => {
      // 对比 Vue $nextTick
      console.log('count by callback', this.state.count);
    })
    console.log('count', this.state.count); // 异步的，拿不到最新值

    // 同步的情况
    // 1、setTimeout中setState是同步的
    // setTimeout(() => {
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    //   console.log('count in settimeout', this.state.count);
    // }, 0);

    // 合并
    // 传入对象，会被合并（类似Object.assign）。只执行一次+1，因为是异步，所以第二次第三次赋值时this.state.count还是初始值
    this.setState({
      count: this.state.count + 1,
    })
    this.setState({
      count: this.state.count + 1,
    })
    this.setState({
      count: this.state.count + 1,
    })
    // 传入函数，不会被合并。执行结果+3。对象可以进行合并，但函数是不能进行合并的
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1
      }
    })
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1
      }
    })
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  handlerClick = () => {
    this.setState({
      count: this.state.count + 1
    })
    console.log('count in body event', this.state.count);
  }

   // 2、自己定义的DOM事件，setState是同步的，在componentDidMount中定义
   componentDidMount() {
    document.addEventListener('click', this.handlerClick)
   }

   componentWillUnmount() {
    document.removeEventListener('click', this.handlerClick)
   }

  render() {
    return <div>
      <p>{this.state.count}</p>
      <button onClick={this.increase}>累加</button>
    </div>
  }
}

export default StateDemo;

// ----------------------------------- 补充 --------------------------------------

// react 函数式编程 纯函数

// 不可变值-数组 --- 不直接改变原数据 push pop splice shift unshift 不行
// const list5Copy = this.state.list5.slice()
// list5Copy.splice(2, 0, 'a') // 中间插入/删除
// this.setState({
//   list1: this.state.list1.concat(100), // 追加 如果用push的话在shouldComponentUpdate会出问题
//   list2: [...this.state.list2, 100], // 追加
//   list3: this.state.list3.slice(0, 3), // 截取
//   list4: this.state.list4.filter((item) => item > 100), // 筛选
//   list5: list5Copy // 其他操作
// })

// 不可变值-对象
// this.setState({
//   obj1: Object.assign({}, this.state.obj1, { a: 100 }),
//   obj2: { ...this.state.obj2, a: 100 }
// })
// 注意： 不能直接对this.state.obj 进行属性设置，这样违反不可变值