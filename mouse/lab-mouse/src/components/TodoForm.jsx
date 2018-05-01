import React from 'react';

class Todoform extends React.Component {
 constructor(props) {
   super(props);
   this.state = {};
   this.updateTask = this.updateTask.bind(this);
   this.updateNotes = this.updateNotes.bind(this);
   this.submit = this.submit.bind(this);

 }

 updateTask(ev) {
     this.setState({task: ev.target.value});
 }
 updateNotes(ev) {
    this.setState({notes: ev.target.value});
}
submit(ev) {
    ev.preventDefault();
    let task = {task: this.state.task, notes: this.state.notes};
    this.props.addTask(task);
    this.setState({
      task: '',
      notes: '',
    })
  }

 render() {
   return <form onSubmit={this.submit}>
       <input type="text" task="task" value={this.state.task}
          placeholder="task"
          onChange={this.updateTask}/>
        <input type="text" task="notes" value={this.state.notes}
          placeholder="notes"
          onChange={this.updateNotes}/>
        <input type="submit" value="Add Task" />
        </form>
 }
}
export default Todoform;
