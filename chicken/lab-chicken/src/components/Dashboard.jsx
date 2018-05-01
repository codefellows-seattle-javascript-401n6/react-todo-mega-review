import React from 'react';
import NoteList from './NoteList.jsx';
import NoteForm from './NoteForm.jsx';
import NoteItem from './NoteItem.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  addNote(note) {
    this.state.notes.push(note);
    this.setState({notes: this.state.notes});
  }

  removeNote(id) {
    let note = this.state.notes.findIndex(note => note.id === id);
    this.state.notes.splice(note, 1);
    this.setState({notes: this.state.notes});
  }

  render() {
    return <div>
      <NoteForm addNote={this.addNote}/>
      <NoteList remove={this.removeNote} notes={this.state.notes}/>
    </div>
  }
}

export default Dashboard;
