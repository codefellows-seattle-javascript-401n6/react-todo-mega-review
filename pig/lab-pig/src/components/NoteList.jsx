import React from 'react';
import NoteItem from './NoteItem.jsx';

class NoteList extends React.Component{
  constructor(props){
    super(props);

    this.listNotes = this.listNotes.bind(this);
  }

  listNotes(){
    return this.props.notes.map( note=> {
      return <NoteItem 
        key={note.id} 
        note={note}
        removeNote={this.props.removeNote}
        updateNote={this.props.updateNote}
        toggleEditing={this.props.toggleEditing}
      />;
    });
  }

  render(){
    return <div>
      <p>Double Click on a note to edit a it!</p>
      <ul>
        {this.listNotes()}
      </ul>
    </div>;
  }
}

export default NoteList;