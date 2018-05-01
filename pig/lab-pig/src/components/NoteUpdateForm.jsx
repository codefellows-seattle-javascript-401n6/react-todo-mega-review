import React from 'react';

class NoteUpdateForm extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      // title: (this.props.note) ? this.props.note.title : 'No Title',
      // content: (this.props.note) ? this.props.note.content : '',
      note: this.props.note
    };
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  onChange(ev){
    let tempNote = Object.assign(this.state.note);
    tempNote[ev.target.name] = ev.target.value;
    this.setState(tempNote);
  }
  
  submit(ev){
    ev.preventDefault();
    this.props.update(this.state.note);
    this.props.toggle();
  }

  cancel(ev){
    console.dir(ev.target)
    if(ev.target.localName === 'fieldset') this.props.toggle();
  }

  render(){
    return <form onSubmit={this.submit} onDoubleClick={this.cancel}>
      <fieldset >
        
        <label htmlFor="title">Update Title: </label>
        <input 
          type="text" 
          name="title" 
          value={this.state.note.title} 
          onChange={this.onChange}/>

        <label htmlFor="content"> Update Content: </label>
        <textarea 
          type="text"
          name="content"
          value={this.state.note.content}
          onChange={this.onChange}/>
        <button type="submit">Edit</button>
        <button type="click" onClick={this.cancel}>Cancel</button>

      </fieldset>
    </form>;
  }
}

export default NoteUpdateForm;