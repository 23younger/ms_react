import React from "react";
import PropTypes from 'prop-types';

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  onTitleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  onSubmit = () => {
    const { submitTitle } = this.props;
    submitTitle(this.state.title);

    this.setState({
      title: ''
    })
  }

  render() {
    return <div>
      <input value={this.state.title} onChange={this.onTitleChange} />
      <button onClick={this.onSubmit}>提交</button>
    </div>
  }
}

// Input props 类型检查
Input.propTypes = {
  submitTitle: PropTypes.func.isRequired
}

class List extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  render() {
    const { list  } = this.props;
    return <ul>
      {
        list.map((item) => {
          return <li key={item.id}>
             {item.title}
          </li>
        })
      }
    </ul>
  }
}

// List props 类型检查
List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
}

class TodoListDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          id: 'id-1',
          title: '标题1',
        },
        {
          id: 'id-2',
          title: '标题2',
        },
        {
          id: 'id-3',
          title: '标题3',
        },
      ]
    }
  }

  onSubmitTitle = (title) => {
    this.setState({
      list: this.state.list.concat({
        id: `id-${Date.now()}`,
        title,
      })
    })
  }

  render() {
    return <div>
      <Input submitTitle={this.onSubmitTitle} />
      <List list={this.state.list} />
    </div>
  }
}

export default TodoListDemo;