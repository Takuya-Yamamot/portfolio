import React, {PureComponent } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    grow: {
      flexGrow: 2,
    },
  })

  const Header = ({ classes }) => (  // classesを追加
    <AppBar position="static">
      <Toolbar>
        {/* Typographyを追加 */}
        <Typography variant="h6" color="inherit" component={Link} to="/">
          タスク管理アプリ
        </Typography>
        <div className={classes.grow}></div>  {/* 追加 */}
        <Button  component="div" display="inline" className="button"><Link to='/'>Top</Link></Button>
        <Button  component="div" display="inline" dir="rtl"><Link to='/About'>About</Link></Button>
      </Toolbar>
    </AppBar>
  )

  export default withStyles(styles)(Header);