import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import About from './About';
import Top from './Top';

class App extends Component {
  render() {
    return (
   <Router>
     <div>
       <ul>
          <li><Link to='/'>Top</Link></li>
          <li><Link to='/About'>About</Link></li>
       </ul>

       <hr />

       <Route exact path='/' component={Top} />
       <Route path='/About' component={About} />

     </div>
   </Router>
    );
  }
}

export default App;
