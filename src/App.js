import React from 'react';
import ToDoList from './components/TodoList'

class App extends React.Component {
  state = {
    toDo: [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
    ],
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addToDoItem = (itemData) => {
    this.setState({
      toDo: [
        ...this.state.toDo,
        {
          task: itemData.task,
          id: itemData.id,
          completed: itemData.completed
        }
      ]
    })
  }

  toggleCompleted = (id) => {
    this.setState(prevState => {
      return {
        toDo: prevState.toDo.map(item => {
          if(item.id === id) {
            item.completed = !item.completed
            return item
          }
          return item
        })
      }
    })
  }

  clearCompletedItems = () => {
    this.setState({
      toDo: this.state.toDo.filter(item => {
        return item.completed === false;
      })
    })
  }

  render() {
    return (
      <div>
        <ToDoList toDo={this.state.toDo} addToDoItem={this.addToDoItem} clearCompletedItems={this.clearCompletedItems} toggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
}

export default App;
