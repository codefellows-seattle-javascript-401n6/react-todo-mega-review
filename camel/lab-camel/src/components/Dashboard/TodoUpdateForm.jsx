import React from 'react';
import {Link} from 'react-router-dom';

class TodoUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      content: this.props.content,
    };
    this.update = this.update.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  update(ev) {
    let newItem = {};
    newItem[ev.target.title] = ev.target.value;
    this.setState(newItem);
  }

  save(ev) {
    ev.preventDefault();
    this.props.finishUpdate(this.state);
  }

  cancel() {
    this.props.finishUpdate({});
    }

  render() {
    return <form id="update-item" onSubmit={this.save}>
      <input type="text" name="title" value={this.state.title} onChange={this.update}/>
      
      <input type="text" name="content" value={this.state.content} onChange={this.update}/>
      
      <button type="submit" onClick={this.save}> Update </button>
    </form>
  }
}

export default TodoUpdateForm;