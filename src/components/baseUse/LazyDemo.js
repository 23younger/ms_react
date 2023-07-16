import React from "react";

const ContextDemo = React.lazy(() => import('./ContextDemo'))

class LazyDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>
      <p>引入一个动态组件</p>
      <hr />
      <React.Suspense fallback={<div>Loading...</div>}>
        <ContextDemo />
      </React.Suspense>
    </div>
    // 1. 强制刷新，可以看到loading（看不到就改变network网速）
    // 2. 看network的js加载，contextDemo是chunk2，后加载 异步加载，可能是配置或版本不一样 呈现效果不同
  }
}

export default LazyDemo;