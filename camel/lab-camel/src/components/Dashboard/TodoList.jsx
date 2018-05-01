import React from 'react';

import Todo from './Todo.jsx';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  list() {
    console.log(this.props.todo)
    return this.props.todo.map((todo, index) => {
      return <Todo todo={todo}
      removeTodo={this.props.removeTodo}
      updateTodo={this.props.updateTodo}
        key={index} index={index}/>;

    });
  }

  render() {
    return <ul id="todo-list">
      {this.list()}
    </ul>
  }
}

export default TodoList;