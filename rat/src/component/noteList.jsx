'use strict';

import React from 'react';

import Note from './note.jsx';

class NoteList extends React.Component{
  constructor(props){
    super(props);
  }

  list() {
    return this.props.notes.map((note, index) => {
      return <Note title={note.title} content={note.content} 
      key={index} index={index}
      removeNote={this.props.removeNote}
      /> 
    });
  }

  render(){
    return <div>
      <h1>
      Note List!
      </h1>
        <ul>
          {this.list()}
        </ul>
    </div>
  }
}
export default NoteList;