import React, {PureComponent} from 'react';
import {withStyles} from '@material-ui/core/styles';
import classes from '*.module.scss';

const styles = {
    title: {
        justifyContent: 'center',
    }
};


class Top extends PureComponent {
    render () {
        return(
<h1 className={classes.title}>Welcome To Takuya's Room</h1>

        );
    }
}

export default withStyles(styles)(Top);