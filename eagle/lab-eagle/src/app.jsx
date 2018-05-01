import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import '../style/main.scss';

import HomePage from './components/homepage.jsx';
import ToDoList from './components/todo-list.jsx';
import TodoForm from './components/todoForm.jsx';
import Dashboard from './components/dashboard.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'My Routed React App',
      description: 'This has been built with Reactjs'
  }
  }
  render() {
    return <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">HomePage</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      <h1>{this.state.title}</h1>
      <Route exact path="/" component={HomePage} />
      <Route path="/dashboard" component={Dashboard} /> 
      </div>
      </Router>
  }
}

let root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App/>, root);
