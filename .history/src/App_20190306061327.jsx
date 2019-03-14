import React, { PureComponent } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import PropTypes from 'prop-types';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import { unstable_Box as Box} from '@material-ui/core/Box';
import About from './About';
import Top from './Top';
import Header from './Header';
import SlideBar from './SlideBar';



class App extends PureComponent {

  render() {
    return (
   <Router>
     <React.Fragment>

       <CssBaseline/>
       {/* <Header /> */}
       <SlideBar />

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
　