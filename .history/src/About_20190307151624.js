import React, {PureComponent} from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
    card: {
        minWidth: 275,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
          width: 1100,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
      cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
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
            <div className={classNames(classes.layout, classes.cardGrid)}>
            <Card className={classes.card}>
            <CardContent>

                <h1>About</h1>
                <table>
                    <tr>
                        <th>Name</th>
                        <td>山本卓也</td>
                    </tr>
                    <tr>
                        <th>School</th>
                        <td>大阪大学経済学部</td>
                    </tr>
                    <tr>
                         <th>BirthDay</th>
                         <td>1995年8月17日</td>
                    </tr>
                    <tr>
                        <th>GitHub</th>
                        <td><a href="https://github.com/Takuya-Yamamot">Takuya-Yamamot</a></td>
                    </tr>
                    <tr>
                         <th>Qiita</th>
                         <td></td>
                    </tr>
                    <tr>
                         <th>Facebook</th>
                         <td></td>
                    </tr>
                    <tr>
                         <th>Facebook</th>
                         <td></td>
                    </tr>
                    <tr>
                         <th>Twitter</th>
                         <td></td>
                    </tr>
                    <tr>
                         <th>Instagram</th>
                         <td></td>
                    </tr>
                    <tr>
                         <th>Mail</th>
                         <td>tyamamoあっとgmail.com</td>
                    </tr>
                </table>
            </CardContent>
            </Card>
            </div>
        );

}

export default withStyles(styles)(About);