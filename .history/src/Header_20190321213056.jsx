import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    button: {
        margin: theme.spacing.unit,
      },
      input: {
        display: 'none',
      },
    grow: {
      flexGrow: 1,
    },
  })

  const Header = ({ classes }) => (
    <AppBar position="fixed">
      <Toolbar>
        <Grid container justify="center" className={classes.root}>
          <Grid item xs={3} sd={3} md={3} lg={3}>
              <Button  component="div" display="inline" className={classes.button} >
                <Link to='/' style={{ textDecoration: 'none', color: "white" }}>Top</Link>
              </Button>
              </Grid>
              <Grid item xs={3} sd={3} md={3} lg={3}>
              <Button  component="div" display="inline" className={classes.button} >
                  <Link to='/About' style={{ textDecoration: 'none', color: "white" }}>About</Link>
              </Button>
              </Grid>
              <Grid item xs={3} sd={3} md={3} lg={3}>
              <Button  component="div" display="inline" className={classes.button} >
                  <Link to='/Works' style={{ textDecoration: 'none', color: "white" }}>Works</Link>
              </Button>
              </Grid>
              <Grid item xs={3} sd={3} md={3} lg={3}>
              <Button  component="div" display="inline" className={classes.button} >
                  <Link to='/Skills' style={{ textDecoration: 'none', color: "white" }}>Skills</Link>
              </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )

  export default withStyles(styles)(Header);