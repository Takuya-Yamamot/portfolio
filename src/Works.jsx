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
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
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
  const works = [
    {
      title: 'ざっくり家計簿2019',
      explain: '母親でも使えるシンプルで使いやすい家計簿を作ろうと思い制作。今後はfirebaseで個人ごとにアカウントを作成して使えるようにしていきたい。',
      link: <a href="https://kakeibo2019.herokuapp.com/">URL</a>
    },
    {
      title: 'Portfolioサイト',
      explain: 'Reactをインターン先で使っているので、学習を兼ねてポートフォリオサイトを作成した。 Material-UIを使ってデザインを組み立てていった。',
      link: <a href="https://takuya-portfolio.firebaseapp.com">URL</a>
    }
  ];
  return (
    <div className={classNames(classes.root, classes.layout, classes.cardGrid)}>
      <Grid container spacing={40} justify="center" >
        {works.map((work) => (
          <Grid item sm={6} md={5} lg={5}>
            <Card className={classes.card}>  {/* ざっくり家計簿2019 */}
              <CardContent>
                <div>
                  <Grid container justify="center" alignItems="center">
                    <h1>{work.title}</h1>
                  </Grid>
                  <Grid container justify="left" alignItems="center">
                    <p>{work.explain}</p>
                  </Grid>
                  <Grid container justify="center">
                    <p>{work.link}</p>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Works);
