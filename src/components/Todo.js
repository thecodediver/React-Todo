import React from 'react'
import styled from 'styled-components'

const StyledToDo = styled.div`
  ul {
    border: 1px solid black;
    color: white;
    box-shadow: 3px 3px 5px black;
    background-color: #333;
    padding: 5%;
  }
  li {
    cursor: pointer;
    text-align: center;
    list-style-type: none;
    font-weight: bold;
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