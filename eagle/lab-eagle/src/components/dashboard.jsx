import React from 'react';
import ToDoList from './todo-list.jsx';
import ToDoForm from './todoForm.jsx';
import ToDoItem from './todo.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  addTodo(todo) {
    this.state.todos.push(todo);
    this.setState({todos: this.state.todos});
    console.log(this.state.todos);
  }
  removeTodo(id) {
    let todo = this.state.todos.findIndex(todo => todo.id === id);
    this.state.todos.splice(todo, 1);
    this.setState({todos: this.state.todos});
  }
  render() {
    return <div>
      <ToDoForm addTodo={this.addTodo}/>
      <ToDoList todolist={this.state.todos}/>
    </div>
  }
}

export default Dashboard;