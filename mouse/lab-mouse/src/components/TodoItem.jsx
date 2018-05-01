import React from 'react';
import {Link} from 'react-router-dom';

class Todoitem extends React.Component {
 constructor(props) {
   super(props);
   this.remove = this.remove.bind(this);
 }

 remove() {
  console.log('removing', this.props.index)
  this.props.removeTask(this.props.index);
}
 render() {
   return <div>
     <span>Task:
      <Link to={"/Todos/" + this.props.notes}>
          {this.props.task}
        </Link>
      </span>
      <span>Notes: <a href={"Notes:" + this.props.notes}>
          {this.props.notes}
        </a>
      </span>
     <button onClick={this.remove}>remove</button>
     </div>
 }
}
export default Todoitem;
