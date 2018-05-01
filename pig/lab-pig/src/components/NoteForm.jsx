import React from 'react';

class NoteForm extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      title: '',
      content: '',

    };
    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(ev){
    let tempState = {};
    tempState[ev.target.name] = ev.target.value;
    this.setState(tempState);
  }

  submit(ev){
    ev.preventDefault();
    
    let note = {
      title: (this.state.title) ? this.state.title : 'No Title',
      content: this.state.content,
    };
  
    this.props.addNote(note);
    this.setState({editing: false, title: '', content: '',});
  }

  render(){
    return <form onSubmit={this.submit}>
      <fieldset >
        
        <label htmlFor="title">Add Title: </label>
        <input 
          type="text" 
          name="title" 
          value={this.state.title}
          onChange={this.onChange}
        />

        <label htmlFor="content"> Add Content: </label>
        <textarea 
          type="text" 
          name="content"
          value={this.state.content}
          onChange={this.onChange}
        />

        <button type="submit">Add Note</button>
      </fieldset>
    </form>;
  }
}

export default NoteForm;