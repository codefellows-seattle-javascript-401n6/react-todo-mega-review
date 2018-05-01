import React from 'react';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(e) {
    this.props.remove(this.props.note.id);
  }

  render() {
    return <li className="note">
      <h3>{this.props.note.title}</h3>
      <h4>{this.props.note.content}</h4>
      <button onClick={this.handleRemove} className="remove"></button>
    </li>
  }
}

export default NoteItem;
