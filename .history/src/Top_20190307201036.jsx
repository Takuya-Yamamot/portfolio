import React from 'react';
import {withStyles} from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';


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
            <div className={classes.root}>
              <h1 className={classes.title}>Welcome To Takuya's Room</h1>
            </div>
        );
}


export default withStyles(styles)(Top);