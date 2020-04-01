import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  alignRight: {
    textAlign: 'right',
    flexGrow: 2
  }
}));

export default function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  const createdDate = new Date(props.info.created_at);

  return (
    <div className="card-pledge">
    <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <Grid xs={8} item>
        <ListItemText primary={`${props.info.firstName} ${props.info.lastName}`} secondary={props.info.description} />
        </Grid>
      <Grid className={classes.alignRight} item>
        <ListItemText primary={`$${props.info.amount}`} secondary={props.info.type} />
        <ListItemText secondary={`${createdDate.getMonth()}/${createdDate.getDay()}/${createdDate.getYear()}`}/>
      </Grid>
      </ListItem>
      <Divider variant="inset" component="li" />
      </div>
  );
}
