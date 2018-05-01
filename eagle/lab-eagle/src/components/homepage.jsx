import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
      }
  render() {
    return <div> 
    <h2 className="page-description">This is an example ToDo App built with reactjs.
    </h2>
    </div>
  }
}

export default HomePage;
