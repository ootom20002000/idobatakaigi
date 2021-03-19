import React, { useState } from 'react';
import { Grid } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import {gravatarPath} from '../gravatar';
import MessageField from './MessageField';

const useStyles = makeStyles({
    root: {
        gridRow: 2,
        margin: '26px',
    },
});

const MessageInputField = ({ name }) => {
    const [text, setText] = useState('');
    const classes = useStyles();
    const avatarPath = gravatarPath('ootom20002000@gmail.com');
    console.log(avatarPath);

    return (
        <div className={classes.root}>
        <Grid container>
            <Grid xs={1}></Grid>
                <Avatar src={avatarPath}/>
            <Grid xs={10}>
                <MessageField name={name} setText={setText} text={text}/>
            </Grid>
            <Grid xs={1}>ボタン</Grid>
        </Grid>
        </div>
    )
};

export default MessageInputField;