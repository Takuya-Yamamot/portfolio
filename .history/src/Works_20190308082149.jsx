import React from 'react';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        backgroundColor: 'white',
    },
    card: {
        minWidth: 210,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: '45%',
        marginTop: theme.spacing.unit * 4,
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    table: {
        display: 'flex',
        flexDirection: 'colum',
        justifyContent: 'left',
        marginRight: 30,
    }

});

function Works(props) {
    const { classes } = props;

    return (
        <div className={classNames(classes.root, classes.cardGrid)}>
            <Card className={classes.card}>
                <CardContent>
                    <Grid container justify="center" alignItems="center">
                        <h1>ざっくり家計簿2019</h1>
                    </Grid>
                    <Grid container justify="center" alignItems="center">
                        <table>
                            <tr>
                                <th className={classes.table}>技術</th>
                                <td>RubyOnRils,Bootstrap4,heroku</td>
                            </tr>
                            <tr>
                                <th className={classes.table}>Github</th>
                                <td></td>
                            </tr>
                        </table>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
}

export default withStyles(styles)(Works);