import React, {PureComponent} from 'react';

class About extends PureComponent {
    render(){
        return(
            <div>
                <h1>About</h1>
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
                </table>
            </div>
        );
    }
}