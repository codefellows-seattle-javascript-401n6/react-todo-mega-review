import React from "react";
import uuidv4 from 'uuid/v4';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      id: '',
      editing: false,
      completed: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value,
      id: uuidv4()
    })
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return <form
      onSubmit={this.handleSubmit}>
      <input
        type='text'
        name='title'
        placeholder='Title'
        onChange={this.handleChange}
      />
      <input
        type='text'
        name='content'
        placeholder='Content'
        onChange={this.handleChange}
      />
      <button type='submit'
        value='Add Note'>Create Note</button>
    </form>
  }
}

export default NoteCreateForm;