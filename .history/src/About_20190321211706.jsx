import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import App from './App.css'
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        backgroundColor: 'white',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        marginTop: theme.spacing.unit * 4,
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
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
    cardGrid: {
        padding: `${theme.spacing.unit * 20}px 0`,
    },
    table: {
        display: 'flex',
        flexDirection: 'colum',
        justifyContent: 'left',
        marginRight: 30,
    },
});

function About(props) {
    const { classes } = props;

        return(
            <div className={classNames(classes.root, classes.layout, classes.cardGrid, App.scroll)}>
               <Grid container spacing={40} justify="center" >
                    <Grid item sm={6} md={5} lg={5}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Grid container justify="center" alignItems="center">
                                <h1>About Me</h1>
                                <Avatar alt="Remy Sharp" src={require("./images/profile.jpg")} className={classes.bigAvatar} />
                                </Grid>
                                <Grid container justify="center" alignItems="center">
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
                                            <td><a href="https://twitter.com/taku_9090">@taku_9090</a></td>
                                        </tr>
                                        <tr>
                                            <th className={classes.table}>Instagram</th>
                                            <td style={{color: "blue"}}><a href="https://www.instagram.com/taku_yannen/">taku_yannen</a></td>
                                        </tr>
                                        <tr>
                                            <th className={classes.table}>Mail</th>
                                            <td>tyamamo08あっとgmail.com</td>
                                        </tr>
                                    </table>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
}

export default withStyles(styles)(About);