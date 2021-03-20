import React from 'react';
import {
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { gravatarPath} from '../gravatar';
import { Autorenew } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    inline: {
      gridRow: 1,
      overflow: 'auto',
      width: '100%',
    },
}));

const MessageItem = ({ name, text }) => { 
    const classes = useStyles(); 
    const avatarPath = gravatarPath(name);

    return (
        <ListItem divider={true}>
        <ListItemAvatar>
          <Avatar src={avatarPath} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {text}
            </Typography>
          }
        />
      </ListItem>
    );
};

export default MessageItem;