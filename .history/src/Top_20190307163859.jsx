import React, {PureComponent} from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    title: {
        justifyContent: 'center',
    }
};


function Top(props) {
    const { classes } = props;

        return(
<h1 className={classes.title}>Welcome To Takuya's Room</h1>

        );
}


export default withStyles(styles)(Top);