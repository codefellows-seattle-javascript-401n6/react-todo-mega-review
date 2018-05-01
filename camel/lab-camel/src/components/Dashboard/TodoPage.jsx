import React from 'react';
import uuid from 'uuid';

import TodoForm from './TodoForm.jsx';
import TodoUpdateForm from './TodoUpdateForm.jsx';
import TodoList from './TodoList.jsx';

class TodoPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [
        {
          id: uuid(),
          title: 'Chores',
          content: 'Mow the lawn',
          editing: false,
          completed: false
        },
        {
          id: uuid(),
          title: 'Grocery Shopping',
          content: 'Milk',
          editing: false,
          completed: false
        },
        {
          id: uuid(),
          title: 'Pay Bills',
          content: 'Electric',
          editing: false,
          completed: false
        }
      ]
    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  addTodo(todo) {
    this.state.todo.push(todo);
    this.setState({ todo: this.state.todo });
  }

  removeTodo(index) {
    console.log('todo remove', index);
    this.state.todo.splice(index, 1);
    this.setState({ todo: this.state.todo });
  }

  updateTodo(updatedItem, index) {
    let newArray = [...this.state.Todo];
    newArray[index] = updatedItem;
    this.setState({todo: newArray});
  }

  render() {
    return <div>
      <ul>
        <TodoList todo={this.state.todo} removeTodo={this.removeTodo} updateTodo={this.updateTodo} />
        <TodoForm addTodo={this.addTodo} />
      </ul>
    </div>
  }
}

export default TodoPage;