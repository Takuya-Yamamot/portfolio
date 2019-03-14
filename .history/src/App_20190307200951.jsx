import React, { PureComponent } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import About from './About';
import Top from './Top';
import Header from './Header';





class App extends PureComponent {

  render() {
    return (
   <Router>
     <React.Fragment>

       {/* <CssBaseline/> */}
       <Grid
  container
  direction="column"
  alignItems="center"
  justify="center"
>

       <Header />
    
            </Grid>

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
　