import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
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
  },
  smallText: {
    fontSize: 10
  }
}));

export default function MediaControlCard(props) {
  const classes = useStyles();

  const createdDate = new Date(props.info.created_at);
  const name = props.info.anonymous ? "Anonymous" : `${props.info.firstName} ${props.info.lastName}`

  return (
    <List className="card-pledge">
      <ListItem>
        <ListItemIcon>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemIcon>
        <Grid xs={8} item>
          <ListItemText primary={name} secondary={props.info.description} />
          <span className={classes.smallText}>{`${createdDate.getMonth()}/${createdDate.getDay()}/${createdDate.getYear()}`}</span>
        </Grid>
        <Grid className={classes.alignRight} item>
          <ListItemText primary={`$${props.info.amount}`} secondary={props.info.type} />
        </Grid>
      </ListItem>
      <Divider variant="inset" component="li" />
      </List>
  );
}
