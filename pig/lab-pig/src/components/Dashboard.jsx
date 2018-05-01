import React from 'react';
import uuid from 'uuid/v1';

import NoteList from './NoteList.jsx';
import NoteForm from './NoteForm.jsx';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: (localStorage.notes) ? JSON.parse(localStorage.notes) : [],
      viewing: 'main',
      editing: false,
    };
    
    this.views = {
      main: () => {
        return null;
      },
      
      add: () => {
        return <NoteForm addNote={this.addNote}/>;
      },
      
      list: ()=> {
        return <NoteList 
          notes={this.state.notes}
          removeNote={this.removeNote}
          updateNote={this.updateNote}
          toggleEditing={this.toggleEditing}/>;
      }
    };
    // Handlers
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    
    // Views
    this.selectView = this.selectView.bind(this);
    this.updateView = this.updateView.bind(this);

    //Helpers
    this.toggleEditing = this.toggleEditing.bind(this);
  }
  
  // CRUD
  addNote(note){
    let newNote = {
      id: uuid(),
      editing: false,
      completed: false,
      title: note.title,
      content: note.content,
    };
    let newNotes = Object.assign(this.state.notes);
    newNotes.push(newNote);
    
    localStorage.notes = JSON.stringify(newNotes);
    this.setState({notes: newNotes});
  }
  
  updateNote(editedNote){
    let newNotes = this.state.notes.map( note =>{
      if(note.id === editedNote.id){
        note = editedNote;
      }
      return note;
    });
    
    localStorage.notes = JSON.stringify(newNotes);
    this.setState({notes: newNotes});
  }

  removeNote(id){
    let newNotes = this.state.notes.filter( note => {
      if(note.id !== id) return note;
    });
    
    localStorage.notes = JSON.stringify(newNotes);
    this.setState({notes: newNotes});
  }
  
  // Views
  updateView(view){
    if(this.state.viewing === view) return;
    if(!this.state.editing) return this.setState({viewing : view});
    
    let confirm = window.confirm('Are you sure you want to leave? Your changes will not be saved.');
    if(confirm) {
      this.setState({viewing : view});
      this.toggleEditing();
    }
  }

  selectView(){
    return this.views[this.state.viewing]();
  }
  
  render(){
    
    return <div>
      <button onClick={() => this.updateView('add')}>Add a new Note!</button>
      <button onClick={() => this.updateView('list')}>View All Notes</button>
      {this.selectView()}
    </div>;
  }

  //Helpers
  toggleEditing(){
    this.setState({editing: !this.state.editing});
  }
}

export default Dashboard;