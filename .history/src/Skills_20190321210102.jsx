import React from 'react';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        backgroundColor: 'white',
        scroll: 'paper',
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
        padding: `${theme.spacing.unit * 20}px 0`
    }
});

function Skills(props) {
    const { classes } = props;

    return (
        <div className={classNames(classes.root, classes.layout, classes.cardGrid)}>
            <Grid container spacing={40} justify="center" >
            <Grid item sm={6} md={5} lg={5}>
            <Card className={classes.card}>
                <CardContent>
                    <Grid container justify="center" alignItems="center">
                        <h1>HTML, CSS</h1>
                    </Grid>
                    <Grid container justify="center">
                        <p>インターン先の業務また個人の開発で使用。
                            単体で使うことは少ないが、JSXで表記したりする際に考えを使う。
                        </p>
                    </Grid>
                    <Grid container justify="center">
                        <p>使用歴7ヶ月</p>
                    </Grid>
                </CardContent>
            </Card>
            </Grid>
            <Grid item sm={6} md={5} lg={5}>
            <Card className={classes.card}>
                <CardContent>
                    <Grid container justify="center" alignItems="center">
                        <h1>JS, React, Typescript</h1>
                    </Grid>
                    <Grid container justify="center">
                        <p>インターン先の業務でReact+Typescriptの開発。
                            個人の開発でReactを使用。
                            アルゴリズム問題やPaizaスキルチェックはnode.jsを使用
                        </p>
                    </Grid>
                    <Grid container justify="center">
                        <p>使用歴6ヶ月</p>
                    </Grid>
                </CardContent>
            </Card>
            </Grid>
            <Grid item sm={6} md={5} lg={5}>
            <Card className={classes.card}>
                <CardContent>
                    <Grid container justify="center" alignItems="center">
                        <h1>Ruby, RubyOnRails</h1>
                    </Grid>
                    <Grid container justify="center">
                        <p>個人の開発で使用。ざっくり家計簿2019はこれで作った、
                        </p>
                    </Grid>
                    <Grid container justify="center">
                        <p>使用歴3ヶ月</p>
                    </Grid>
                </CardContent>
            </Card>
            </Grid>
            <Grid item sm={6} md={5} lg={5}>
            <Card className={classes.card}>
                <CardContent>
                    <Grid container justify="center" alignItems="center">
                        <h1>Git, Github</h1>
                    </Grid>
                    <Grid container justify="center">
                        <p>主にインターン先でのチーム開発で使用。
                           インターン先ではconflictの修正にはrebaseで対応した。
                        </p>
                    </Grid>
                    <Grid container justify="center">
                        <p>使用歴6ヶ月</p>
                    </Grid>
                </CardContent>
            </Card>
            </Grid>
            <Grid item sm={6} md={5} lg={5}>
            <Card className={classes.card}>
                <CardContent>
                    <Grid container justify="center" alignItems="center">
                        <h1>英語</h1>
                    </Grid>
                    <Grid container justify="center">
                        <p>IELTS6.5取得。
                            ９か月間のアメリカ交換留学でナンパ~プレゼン~交渉といった幅広い状況下で使用。
                            インターン先での海外出身エンジニアとも英語での意思疎通に挑戦中。
                        </p>
                    </Grid>
                    <Grid container justify="center">
                        <p>学習歴12年,実用歴3年</p>
                    </Grid>
                </CardContent>
            </Card>
            </Grid>
            <Grid item sm={6} md={5} lg={5}>
            <Card className={classes.card}>
                <CardContent>
                    <Grid container justify="center" alignItems="center">
                        <h1>ギター</h1>
                    </Grid>
                    <Grid container justify="center">
                        <p>Hardrock,HeavyMetalを中心に洋楽有名曲の演奏を行う。
                            アメリカでバンド経験あり。
                            ギターを通して言葉の通じない国の人と心を通わせた経験に感動。
                        </p>
                    </Grid>
                    <Grid container justify="center">
                        <p>演奏歴13年</p>
                    </Grid>
                </CardContent>
            </Card>
            </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(Skills);