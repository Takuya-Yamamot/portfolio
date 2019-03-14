import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
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

  const Header = ({ classes }) => (  // classesを追加
    <AppBar position="static">
      <Toolbar>

        <div className={classes.grow}></div>
        <Button  component="div" display="inline" className={classes.button} color="inherit">
             <Link to='/' style={{ textDecoration: 'none', color: "white" }}>Top</Link>
        </Button>
        <Button  component="div" display="inline" className={classes.button} >
            <Link to='/About' style={{ textDecoration: 'none', color: "white" }}>About</Link>
        </Button>
        <div className={classes.grow}></div>

      </Toolbar>
    </AppBar>
  )

  export default withStyles(styles)(Header);