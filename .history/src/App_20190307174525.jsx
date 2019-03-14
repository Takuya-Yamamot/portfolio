import React, { PureComponent } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './About';
import Top from './Top';
import Header from './Header';




class App extends PureComponent {

  render() {
    return (
   <Router>
     <React.Fragment>

       {/* <CssBaseline/> */}
       <Header />

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
　