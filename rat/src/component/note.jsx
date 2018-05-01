'use strict';
import React from 'react';
import {Link} from 'react-router-dom';

class Note extends React.Component{
  constructor(props){
    super(props);
    this.remove = this.remove.bind(this);
  }

  remove() {
    console.log('12 removing', this.props.index)
    this.props.removeNote(this.props.index);
  }

  render(){
    return <div>
         <span>Title: 
        <Link to={"/notes/" + this.props.title}>
          {this.props.title}
        </Link>
      </span>
      <span>Content: <a href={"tel:" + this.props.content}>
          {this.props.content}
        </a>
      </span>
      <button onClick={this.remove}>remove</button>
    </div>
  }
}

export default Note;