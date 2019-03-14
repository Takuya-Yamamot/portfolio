import React, {PureComponent} from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        backgroundColor: 'white',
    },
    title: {
        justifyContent: 'center',
        margin: 'auto',
        width: '50%',
        marginTop: theme.spacing.unit *10,
    }
});


function Top(props) {
    const { classes } = props;

        return(
            <h1 className={classes.title}>Welcome To Takuya's Room</h1>

        );
}


export default withStyles(styles)(Top);