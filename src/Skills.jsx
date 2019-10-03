import React from 'react';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
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
    padding: `${theme.spacing.unit * 20}px 0`
  }
});

function Skills(props) {
  const { classes } = props;
  const contents = [
    {
      title: 'HTML, CSS',
      explain: 'インターン先の業務また個人の開発で使用。単体で使うことは少ないが、JSXで表記したりする際に考えを使う。',
      span:'2018/7'
    },
    {
      title: 'Python,Django',
      explain: 'インターン先の社内システムの構築で使用。WEBマーケティング業務における、ブログコンテンツ管理システムを構築。ライター、レビュアー、投稿者などのユーザロールに合わせたタスクの取得に関する機能を実装。',
      span: '2018/10'
    },
    {
      title: 'Vanila.js,React.js,Typescript',
      explain: 'インターン先の業務でReact+Typescriptの開発。 個人の開発でReactを使用。 アルゴリズム問題やPaizaスキルチェックはnode.jsを使用。',
      span: '2018/9'
    },
    {
      title: 'Google Apps Script',
      explain: 'インターン先営業チームの、アポイントメント取得からメール送信文章の自動生成をGoogleForm,Spreadsheet,Chatworkを連携させることにより実現。他にもBOT作成などに使用。',
      span: '2018/12~'
    },
    {
      title: 'Git,Github',
      explain: '主にインターン先でのチーム開発で使用。インターン先ではconflictの修正にはrebaseで対応した。',
      span:'2018/10'
    },
    {
      title: 'English',
      explain: 'IELTS6.5取得。 ９か月間のアメリカ交換留学で勉強~プレゼン~交渉と幅広い場面で使用。 インターン先での海外出身エンジニアとも英語での意思疎通に挑戦中。',
      span: '2007'
    },
    {
      title: 'Guitar',
      explain: 'Hardrock,HeavyMetalを中心に洋楽有名曲の演奏を行う。 アメリカでバンド経験あり。 ギターを通して言葉の通じない国の人と心を通わせた経験に感動。',
      span: '2007'
    },
  ]

  return (
    <div className={classNames(classes.root, classes.layout, classes.cardGrid)}>
      <Grid container spacing={40} justify="center" >
        {contents.map((content) =>(
          <Grid item sm={6} md={5} lg={5}>
            <Card className={classes.card}>
              <CardContent>
                <div>
                  <Grid container justify="center" alignItems="center">
                    <h1>{content.title}</h1>
                  </Grid>
                  <Grid container justify="center">
                    <p>{content.explain}</p>
                  </Grid>
                  <Grid container justify="center">
                    <p>使用歴：{content.span}~</p>
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

export default withStyles(styles)(Skills);
