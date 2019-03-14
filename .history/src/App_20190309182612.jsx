import React, { PureComponent } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import Grid from '@material-ui/core/Grid';
import About1 from './About1';
import Top from './Top';
import Header from './Header';
import Works from './Works';


class App extends PureComponent {

  render() {
    return (
   <Router>
     <React.Fragment>
        <Header />
        <div>
          <Route exact path='/' component={Top} />
          <Route path='/About' component={About1} />
          <Route path='/Works' component={Works} />
        </div>
     </React.Fragment>
   </Router>
    );
  }
}

export default App;
　