import React, {PureComponent} from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = {

};


class Top extends PureComponent {
    render () {
        return(
<h1>Welcome To Takuya's Room</h1>

        );
    }
}

export default withStyles(styles)(Top);