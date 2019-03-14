import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { unstable_Box as Box} from '@material-ui/core/Box';
import About from './About';
import Top from './Top';

class App extends Component {
  render() {
    return (
   <Router>
     <React.Fragment>

      <AppBar position="static" color="default">
        {/* <Typography component="div"> */}
        {/* <Box textAlign="center"> */}
          <Button><Link to='/'>Top</Link></Button>
          <Button><Link to='/About'>About</Link></Button>
        {/* </Box> */}
        {/* </Typography> */}
      </AppBar>

      <div>
       <Route exact path='/' component={Top} />
       <Route path='/About' component={About} />
     </div>
     </React.Fragment>
   </Router>
    );
  }
}

export default App;
