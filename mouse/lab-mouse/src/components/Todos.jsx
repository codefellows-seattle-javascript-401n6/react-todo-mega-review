import React from 'react';

import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';

class Todos extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     items: [
      {task: "Feed Kiddo", notes: "make sure she eats all veggies"},
      {task: "Wash Kiddo", notes: "wash hands/brush teeth"},
      {task: "Put kiddo to bed", notes: "read her two books"}, 
   ]};
   this.addTask = this.addTask.bind(this);
   this.removeTask = this.removeTask.bind(this);
 }
 
 addTask(item) {
  console.log('added new task', item);
  this.state.items.push(item);
  this.setState({items: this.state.items});
  }

 removeTask(index) {
  console.log('page removing', index);
  this.state.items.splice(index, 1);
  this.setState({items: this.state.items});
}

 render() {
   return <div>
       <TodoForm addTask={this.addTask}/>
       <TodoList items= {this.state.items}
        removeTask={this.removeTask}/>
     </div> 
 }
}

export default Todos;
