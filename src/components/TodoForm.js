import React from 'react'
import styled from 'styled-components'

const StyledTodoForm = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 50%;
    margin-bottom: 2%;
    text-align: center;
  }
  button {
    width: 50%;
    margin-bottom: 2%;
  }
`

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
      <StyledTodoForm>
        <input type="text" placeholder="New Task" value={this.state.input} onChange={this.changeInput} />
        <button onClick={this.toDoItemAdd}>Add Todo Item</button>
        <button onClick={e => this.props.clearCompletedItems()}>Clear Completed Items</button>
      </StyledTodoForm>
    )
  }
}

export default TodoForm