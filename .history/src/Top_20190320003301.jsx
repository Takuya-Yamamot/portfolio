import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid';
import App from './App.css'


const styles = theme => ({
    root: {
        backgroundColor: 'white',
    },
});


function Top(props) {
    const { classes } = props;

        return(
            <div className={classNames(classes.root, App.scroll)}>
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
            >
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <h1>Welcome&nbsp;To&nbsp;Takuya's&nbsp;Room</h1>
            </Grid>
            <Grid item xs={3}></Grid>
            </Grid>
            </div>
        );
}


export default withStyles(styles)(Top);