import React from 'react';

import CreateForm from './note-create-form.jsx';

import NoteList from './note-list.jsx';

class Dashboard extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      notes: [
      ],
    }

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  addNote(noteObj) {
    let newArray = this.state.notes;
    newArray.push(noteObj);
    this.setState({notes: newArray});
    console.log('current notes', this.state.notes);
  }

  removeNote(id) {
    console.log('note to remove', id);
    let noteToRemove = this.state.notes.find(note => {
      return note.id = id;
    });
    let noteIndex = this.state.notes.indexOf(noteToRemove);
    this.state.notes.splice(noteIndex, 1);
    this.setState({notes: this.state.notes});
  }

  render() {
    return <main>
      <p>Welcome to your dashboard!</p>
      <CreateForm addNoteFunc={this.addNote}></CreateForm>
      <NoteList notes={this.state.notes} removeNote={this.removeNote} />
    </main>
  }
}

export default Dashboard;