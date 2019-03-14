import React, {PureComponent } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
      },
    grow: {
      flexGrow: 1,
    },
  })

  const Header = ({ classes }) => (  // classesを追加
    <AppBar position="static" color="gray">
      <Toolbar>
        {/* Typographyを追加 */}
        {/* <Typography variant="h6" color="inherit" component={Link} to="/">
          タスク管理アプリ
        </Typography> */}
        <div className={classes.grow}></div>  {/* 追加 */}
        <Button  component="div" variant="contained" display="inline" className={classes.button}>
             <Link to='/' style={{ textDecoration: 'none' }}>Top</Link>
        </Button>
        <Button  component="div" display="inline" >
            <Link to='/About'>About</Link>
        </Button>
        <div className={classes.grow}></div>
      </Toolbar>
    </AppBar>
  )

  export default withStyles(styles)(Header);