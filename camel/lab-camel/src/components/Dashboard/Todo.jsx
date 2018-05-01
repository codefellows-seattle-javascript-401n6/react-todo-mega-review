import React from 'react';

import { Link } from 'react-router-dom';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    }
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.finishUpdate = this.finishUpdate.bind(this);
  }

  remove() {
    console.log('removing', this.props.index)
    this.props.removeTodo(this.props.index);
  }

  update() {
    console.log('UPDATE this.props.id', this.props.id);
    this.props.updateTodo(this.props.id)
  }

  toggleUpdate() {
    this.setState({isEditing: !this.state.isEditing});
  }


  finishUpdate(updatedItem) {
    this.setState({isEditing: false});
    this.props.updateTodo(updatedItem, this.props.id);
  }

  render() {
    if (this.state.isEditing) {
      return <TodoUpdateForm title={this.props.title}
        content={this.props.content}
        finishUpdate={this.finishUpdate}
        toggleUpdate={this.toggleUpdate} />
    }
    return <div onClick={this.toggleUpdate}>
      <ul>
        <li id="list-title">
          <Link to={"/todo/" + this.props.content}>
            {this.props.todo.title}
          </Link>
        </li>
      </ul>
      <ul>
        <li id="list-content"> {this.props.todo.content} </li>
      </ul>
        <button id="remove" onClick={this.remove}>Remove</button>
        <button onClick={this.update}>Update</button>
    </div>
  }
}

export default Todo;