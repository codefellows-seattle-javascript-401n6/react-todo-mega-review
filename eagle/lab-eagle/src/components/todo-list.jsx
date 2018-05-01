import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import ToDoItem from './todo.jsx';



class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.getToDo=this.getToDo.bind(this);
  }
  getToDo() {
    console.log(this.props);
    return this.props.todolist.map((todo, index) => {
      return <ToDoItem title={todo.title} content={todo.content}
      key={index} index={index}
      removeTodo={this.props.removeTodo}/>;
    })
  }

  render() {
    return <div> 
      <h2>To Do's</h2>
      <ul id="todo-list">{this.getToDo()}</ul>
      </div>
  }
}

export default ToDoList;
// render() {
//   return <form onSubmit={this.handleSubmit}>
//   <input type="text" name="title" placeholder="Title" onChange={this.handleChange}/>
//   <input type="text" name="content" placeholder="To do" onChange={this.handleChange}/>
//   <button type="submit">Add</button>
//   </form>
// }
// }