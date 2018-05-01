import React from 'react';
import uuid4 from 'uuid/v4';


class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      editing: false,
      completed: false,
      id: ''
    }
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let change = e.target.value;
    this.setState({[e.target.name]: change, id:uuid4()});
  }
  handleSubmit(e){
    e.preventDefault();
    console.log('inside handle submit')
    this.props.addTodo(this.state);
    console.log(this.state);
    
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
    <input type="text" name="title" placeholder="Title" onChange={this.handleChange}/>
    <input type="text" name="content" placeholder="To do" onChange={this.handleChange}/>
    <button type="submit">Add</button>
    </form>
  }
}

export default ToDoForm;

