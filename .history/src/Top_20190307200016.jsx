import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import { NavigationFullscreenExit } from 'material-ui/svg-icons';


const styles = theme => ({
    root: {
        backgroundColor: 'white',
        display: 'flex',
        direction: 'column', /* 子要素をflexboxにより縦方向に揃える */
        content: 'center', /* 子要素をflexboxにより中央に配置する */
        items: 'center',  /* 子要素をflexboxにより中央に配置する */
        width: 100, /* 見た目用 */
        height: 50,/* 見た目用 */
        // eslint-disable-next-line no-undef
        border: 1,solid, /* 見た目用 */
    },
    title: {
        position: 'relative',
        justifyContent: 'center',
        margin: 'auto',
        width: '50%',
        marginTop: theme.spacing.unit *10,
    }
});


function Top(props) {
    const { classes } = props;

        return(
            <div className={classes.root}>
              <h1 className={classes.title}>Welcome To Takuya's Room</h1>
            </div>
        );
}


export default withStyles(styles)(Top);