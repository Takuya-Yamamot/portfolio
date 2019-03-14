import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import About from './About';
import Top from './Top';

class App extends Component {
  render() {
    return (
   <Router>
     <div>
       <ul>
          <li><link to='/'>Top</link></li>
          <li><link to='/About'>About</link></li>
          <li></li>
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
