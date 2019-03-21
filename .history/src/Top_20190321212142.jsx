import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    root: {
        backgroundColor: 'white',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 4,
        marginRight: theme.spacing.unit * 4,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
          width: 1100,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
});

function Top(props) {
    const { classes } = props;

        return(
            <div className={classNames(classes.root, classes.layout)}>
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
            >
            <Grid item xs={6}>
                <h1>Welcome To Takuya's Room</h1>
            </Grid>
            </Grid>
            </div>
        );
}


export default withStyles(styles)(Top);