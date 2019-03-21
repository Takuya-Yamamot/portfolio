import React, { PureComponent } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Scrollable from 'hide-scrollbar-react';
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
        <Scrollable>
        <div>
          <Route exact path='/' component={Top} />
          <Route path='/About' component={About} />
          <Route path='/Works' component={Works} />
          <Route path='/Skills' component={Skills} />
        </div>
        </Scrollable>
     </React.Fragment>
   </Router>
    );
  }
}

export default App;
　