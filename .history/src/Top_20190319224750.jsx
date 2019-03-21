import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Scrollable from 'hide-scrollbar-react';


const styles = theme => ({
    root: {
        backgroundColor: 'white',
    },
});


function Top(props) {
    const { classes } = props;

        return(
            <Scrollable>
            <div className={classes.root}>
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
            </Scrollable>
        );
}


export default withStyles(styles)(Top);