import React from 'react';
import {Link} from 'react-router-dom';

class NoteItem extends React.Component {
  constructor(props){
    super(props);
    this.remove = this.remove.bind(this);
  }
  remove(){
    console.log('remove', this.props.index)
    this.props.removeNote(this.props.index);
  }

  render(){
    return <div>
      <div>Title: {this.props.title}</div>
      <div>Content: {this.props.content}</div>
      <button onClick={this.remove}>Remove</button>
      </div>
  }
}

export default NoteItem;