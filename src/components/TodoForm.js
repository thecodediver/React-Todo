import React from 'react'

class TodoForm extends React.Component {
  state = {
    input: ""
  }
  changeInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  toDoItemAdd = () => {
    this.props.addToDoItem({ task: this.state.input, id: Date.now().toString(), completed: false })
    this.setState({
      input: ""
    })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.input} onChange={this.changeInput} />
        <button onClick={this.toDoItemAdd}>Add Todo Item</button>
        <button onClick={e => this.props.clearCompletedItems()}>Clear Completed Items</button>
      </div>
    )
  }
}

export default TodoForm