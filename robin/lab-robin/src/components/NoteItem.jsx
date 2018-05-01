import React from "react";

class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(ev) {
    return this.props.removeNote(this.props.note.id);
  }

  render() {
    return <div>
      <h2>{this.props.note.title}</h2>
      <h3>{this.props.note.content}</h3>
      <button
        onClick={this.handleRemove}>
        Remove
      </button>
    </div>
  }
}

export default NoteItem;