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
            <Grid>
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}
>
<Grid item xs={3}>
            <div className={classes.root}>
              <h1 className={classes.title}>Welcome To Takuya's Room</h1>
            </div>
            </Grid>
            </Grid>
        );
}


export default withStyles(styles)(Top);