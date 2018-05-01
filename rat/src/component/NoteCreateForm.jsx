'use strict';
import React from 'react';
import uuid from 'uuid';


class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: uuid.v1(),
      // editing: !editing.value,
      // completed: !completed.value,
      content: '',
      title: '',
    }
    this.updateContent = this.updateContent.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


updateContent(ev){
  let inputContent = ev.target.value;
  this.setState({content:inputContent});
}

updateTitle(ev){
  let inputTitle = ev.target.value;
  this.setState({title:inputTitle});
}

handleSubmit(ev) {
  ev.preventDefault();

}

handel
  render(){
    return <div>
    <form onSubmit={this.handleSubmit}>
    <input type="text" value={this.state.content} onChange={this.updateContent} placeholder='content'></input>
    <input type="text" value={this.state.title} onChange={this.updateTitle} placeholder='Title'></input>
    <button>Submit</button>
    </form>
    </div>
  }
}

export default Dashboard;