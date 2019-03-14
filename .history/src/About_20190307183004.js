import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
// import profile from  '~/images/profile.jpg';

const styles = theme => ({
    root: {
        backgroundColor: 'white',
    },
    card: {
        minWidth: 100,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: '45%',
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    // layout: {
    //     width: 'auto',
    //     marginLeft: theme.spacing.unit * 3,
    //     marginRight: theme.spacing.unit * 3,
    //     [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
    //       width: 1100,
    //       marginLeft: 'auto',
    //       marginRight: 'auto',
    //     },
    // },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    table: {
        display: 'flex',
        flexDirection: 'colum',
        justifyContent: 'left',
        marginRight: 30,
    },
    // title: {
    //     fontSize: 14,
    // },
    // pos: {
    //     marginBottom: 12,
    // },
});

function About(props) {
    const { classes } = props;

        return(
            <div className={classNames(classes.root, classes.cardGrid)}>
            <Card className={classes.card}>
            <CardContent>
                <Grid container justify="left" alignItems="center">
                     <h1>About Me</h1>
                     <Avatar alt="Remy Sharp" src="~/images/profile.jpg" className={classes.bigAvatar} />
                </Grid>
                <table>
                    <tr>
                        <th className={classes.table}>Name</th>
                        <td>山本卓也</td>
                    </tr>
                    <tr>
                        <th className={classes.table}>School</th>
                        <td>大阪大学経済学部</td>
                    </tr>
                    <tr>
                         <th className={classes.table}>BirthDay</th>
                         <td>1995年8月17日</td>
                    </tr>
                    <tr>
                        <th className={classes.table}>GitHub</th>
                        <td><a href="https://github.com/Takuya-Yamamot">Takuya-Yamamot</a></td>
                    </tr>
                    <tr>
                         <th className={classes.table}>Qiita</th>
                         <td><a href="https://qiita.com/takuya_yamamot">@takuya_yamamot</a></td>
                    </tr>
                    <tr>
                         <th className={classes.table}>Facebook</th>
                         <td><a href="https://www.facebook.com/takuya.yamamoto.98871">Takuya Yamamoto</a></td>
                    </tr>
                    <tr>
                         <th className={classes.table}>Twitter</th>
                         <td></td>
                    </tr>
                    <tr>
                         <th className={classes.table}>Instagram</th>
                         <td></td>
                    </tr>
                    <tr>
                         <th className={classes.table}>Mail</th>
                         <td>tyamamo8あっとgmail.com</td>
                    </tr>
                </table>
            </CardContent>
            </Card>
            </div>
        );

}

export default withStyles(styles)(About);