import React, { PureComponent } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { unstable_Box as Box} from '@material-ui/core/Box';
import {withStyles} from '@material-ui/styles';
import About from './About';
import Top from './Top';

const styles = {
section:{
 
},
};

class App extends PureComponent {
  render() {
    return (
   <Router>
     <React.Fragment>

      <CssBaseline/>
        <AppBar position="static" color="default" >
          <Toolbar align="right">
          <Typography component="div">
          {/* <Box display="flex" flexDirection="row-reverse" p={1} m={1}> */}
          <div className="section">
            <Button  component="div" display="inline" color="black"><Link to='/'>Top</Link></Button>
            <Button  component="div" display="inline" dir="rtl"><Link to='/About'>About</Link></Button>
          </div>
          {/* </Box> */}
          </Typography>
          </Toolbar>
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

export default withStyles(styles)(App);
