import React from 'react';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
// import  App from ''

const styles = theme => ({
    root: {
        backgroundColor: 'white',
    },
    card: {
        // minWidth: 210,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        // width: '45%',
        marginTop: theme.spacing.unit * 4,
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
    }

});

function Works(props) {
    const { classes } = props;

    return (
        <div className={classNames(classes.root, classes.layout, classes.cardGrid)}>
            <Grid container spacing={40} justify="center" >
            <Grid item sm={6} md={4} lg={3}>
            <Card className={classes.card}>  {/* ざっくり家計簿2019 */}
                <CardContent>
                    <Grid container justify="center" alignItems="center">
                        <h1>ざっくり家計簿2019</h1>
                    </Grid>
                    <Grid container justify="left" alignItems="center">
                        <p>
                            母親でも使えるシンプルで使いやすい家計簿を作ろうと思い制作。
                            RubyOnRailsを用いて実装し、Bootstrapでデザインを行った。
                            今後はfirebaseで個人ごとにアカウントを作成して使えるようにしていきたい。
                        </p>
                    </Grid>
                    <Grid container justify="center">
                        <p><a href="https://kakeibo2019.herokuapp.com/">URL</a></p>
                    </Grid>
                </CardContent>
            </Card>
            </Grid>
            <Grid item sm={6} md={4} lg={3}>
            < Card className={classes.card}> {/* ポートフォリオサイト */}
                <CardContent>
                    <Grid container justify="center" alignItems="center">
                        <h1>ポートフォリオサイト</h1>
                    </Grid>
                    <Grid container justify="center">
                        <p>
                            Reactをインターン先で使っているので、学習を兼ねてポートフォリオサイトを作成した。
                            Material-UIを使ってデザインを組み立てていった。
                        </p>
                    </Grid>
                    <Grid container justify="center">
                        <p><a href="none">URL</a></p>
                    </Grid>
                </CardContent>
            </Card>
            </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(Works);