// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

class ToDoList extends React.Component {
  render() {
    return (
      <div>
        <Todo toDo={this.props.toDo} toggleCompleted={this.props.toggleCompleted}/>
        <TodoForm addToDoItem={this.props.addToDoItem} clearCompletedItems={this.props.clearCompletedItems} />
      </div>
    )
  }
}

export default ToDoList

