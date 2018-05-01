'use strict';
import React from 'react';
import ReactDom from 'react-dom';


import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Landing from './component/Landing.jsx';
import Dashboard from './component/NoteCreateForm.jsx';
import Notes from './component/notesPage.jsx';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'Welcome to your TODO List!',
    }
  }
  render(){
    return <Router>
      <div>
        <nav>
        <h1>
          {this.state.title}
        </h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/dashboard'>New Note</Link></li>
          <li><Link to='/notesPage'>Note List</Link></li>
        </ul>
        </nav>
        <div id='main-content'>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route exact path='/notesPage' component={Notes}/>

        </div>
      </div>
    </Router>
  }
}

let root = document.createElement('div');
document.body.appendChild(root);
ReactDom.render(<App/>, root);

