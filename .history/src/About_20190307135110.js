import React, {PureComponent} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
    card: {
        minWidth: 275,
    }
    // title: {
    //     fontSize: 14,
    // },
    // pos: {
    //     marginBottom: 12,
    // },
}

function About(props) {
    const { classes } = props;

        return(
            <Card className={classes.card}>
            <CardContent>
                
                
                {/* <h1>About</h1>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>School</th>
                        <th>BirthDay</th>
                        <th>GitHub</th>
                        <th>Qiita</th>
                        <th>Facebook</th>
                        <th>Twitter</th>
                        <th>Instagram</th>
                        <th>Mail</th>
                    </tr>
                    <tr>
                        <td>山本卓也</td>
                        <td>大阪大学経済学部</td>
                        <td>1995年8月17日</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>tyamamoあっとgmail.com</td>
                    </tr>
                </table> */}
            </CardContent>
            </Card>
        );
    
}

export default withStyles(styles)(About);