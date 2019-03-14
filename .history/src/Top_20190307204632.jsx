import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


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
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
          >
            <Grid item xs={3}>
              <h1 className={classes.title}>Welcome&nbsp;To&nbsp;Takuya's&nbsp;Room</h1>
              </Grid>
              </Grid>
            </div>
            
        );
}


export default withStyles(styles)(Top);