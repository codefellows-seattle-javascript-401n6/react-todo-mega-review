import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Landing from './components/Landing.jsx';
import Dashboard from './components/Dashboard.jsx';

import './styles/main.scss';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      title: 'hello react'
    };

  }

  render(){
    return <Router>
      <div>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
          </ul>
        </nav>
        <Route exact path='/' component={Landing} />
        <Route path='/dashboard' component={Dashboard} />
      </div>
    </Router>;
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));