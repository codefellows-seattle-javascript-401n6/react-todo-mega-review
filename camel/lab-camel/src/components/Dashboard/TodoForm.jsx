import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.submit = this.submit.bind(this);
  }

  updateTitle(ev) {
    this.setState({title: ev.target.value});
  }

  updateContent(ev) {
    this.setState({content: ev.target.value});
  }

  submit(ev) {
    ev.preventDefault();
    let todo = {title: this.state.title, content: this.state.content};
    console.log('this.props= ', this.props);
    this.props.addTodo(todo);
    this.setState({
      title: '',
      content: '',
    })
  }

  render() {
    return <form id="add-item" onSubmit={this.submit}>
      <input type="text" name="title" value={this.state.title}
        placeholder="title"
        onChange={this.updateTitle}/>
      
      <input type="text" name="content" value={this.state.content}
        placeholder="content"
        onChange={this.updateContent}/>
      
      <button type="submit"> Add Item </button>
    </form>
  }
}

export default TodoForm;