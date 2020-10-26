import React from 'react'
import styled from 'styled-components'

const StyledToDo = styled.div`
  li {
    cursor: pointer;
  }
  .completed {
    text-decoration: line-through;
  }
`


class Todo extends React.Component {
  render() {
    return (
      <StyledToDo>
        <ul>
          {this.props.toDo.map(todo => <li className={todo.completed ? 'completed' : null} onClick={e => this.props.toggleCompleted(todo.id)} key={todo.id}>{todo.task}</li>)}
        </ul>
      </StyledToDo>
    )
  }
}

export default Todo