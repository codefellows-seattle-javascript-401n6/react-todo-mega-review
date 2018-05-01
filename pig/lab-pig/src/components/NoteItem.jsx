import React from 'react';
import NoteUpdateForm from './NoteUpdateForm.jsx';

class NoteItem extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      note: this.props.note,
      editing: false,
    };
    
    this.defaultView = this.defaultView.bind(this);
    this.editView = this.editView.bind(this);

    this.toggleEditing = this.toggleEditing.bind(this);
    this.removeNote = this.removeNote.bind(this);

  }

  removeNote(){
    this.props.removeNote(this.state.note.id);
  }
  toggleEditing(){
    this.setState({editing: !this.state.editing});
    this.props.toggleEditing();
  }

  defaultView(){
    return <li onDoubleClick={this.toggleEditing} id={this.state.note.id}>
      <p>Title: {this.state.note.title}</p>
      <p>Details: {this.state.note.content}</p>
      <button onClick={this.removeNote}>Remove</button>
    </li>;
  }
  
  editView(){
    return <NoteUpdateForm 
      note={this.state.note} 
      toggle={this.toggleEditing}
      update={this.props.updateNote}
    />;
  }

  render(){
    return (this.state.editing) ? this.editView() : this.defaultView();
  }
}

export default NoteItem;