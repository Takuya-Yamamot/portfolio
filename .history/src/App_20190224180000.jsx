import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { unstable_Box as Box} from '@material-ui/core/Box';
import About from './About';
import Top from './Top';

class App extends Component {
  render() {
    return (
   <Router>

      <AppBar>
        <Box textAlign="center">
          <Button><Link to='/'>Top</Link></Button>
          <Button><Link to='/About'>About</Link></Button>
        </Box>

      </AppBar>

      <div>
       <Route exact path='/' component={Top} />
       <Route path='/About' component={About} />
     </div>
   </Router>
    );
  }
}

export default App;
