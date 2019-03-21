import React, { PureComponent } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import Grid from '@material-ui/core/Grid';
import About from './About.jsx';
import Top from './Top';
import Header from './Header';
import Works from './Works';
import Skills from './Skills';


class App extends PureComponent {

  render() {
    return (
   <Router>
     <React.Fragment>
        <Header />
        <div>
          <Route exact path='/' component={Top} />
          <Route path='/About' component={About} />
          <Route path='/Works' component={Works} />
          <Route path='/Skills' component={Skills} />
        </div>
     </React.Fragment>
   </Router>
    );
  }
}

export default App;
　