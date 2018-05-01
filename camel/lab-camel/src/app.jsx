import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Homepage from './components/Homepage.jsx';
import TodoPage from './components/Dashboard/TodoPage.jsx';
import './style/main.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'My To-Do List'
    }
  }

  render() {
    return <Router>
      <div>
        <nav>
          <ul id="navbar">
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/todo">To-Do List</Link></li>
          </ul>
        </nav>
        <h1>{this.state.title}</h1>
        <Route exact path="/" component={Homepage} />
        <Route path="/todo" component={TodoPage} />
      </div>
    </Router>
  }
}

let root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App/>, root);