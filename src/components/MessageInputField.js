import React, { useRef, useState } from 'react';
import { Grid } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import {gravatarPath} from '../gravatar';
import MessageField from './MessageField';
import MessageSubmitButton from './MessageSubmitButton';

const useStyles = makeStyles({
    root: {
        gridRow: 2,
        margin: '26px',
    },
});

const MessageInputField = ({ name }) => {
    const inputEl = useRef(null);
    const [text, setText] = useState('');
    const classes = useStyles();
    const avatarPath = gravatarPath('ootom20002000@gmail.com');

    return (
        <div className={classes.root}>
        <Grid container>
            <Grid item xs={1}></Grid>
                <Avatar src={avatarPath}/>
            <Grid item xs={10}>
                <MessageField
                  inputEl={inputEl}
                  name={name}
                  setText={setText}
                  text={text}
                />
            </Grid>
            <Grid item xs={1}>
                <MessageSubmitButton 
                inputEl={inputEl}
                name={name}
                setText={setText}
                text={text}
                />
            </Grid>
        </Grid>
        </div>
    )
};

export default MessageInputField;