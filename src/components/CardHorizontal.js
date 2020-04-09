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
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

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
  },
  greenIcon: {
    color: "#1B5460",
    fontWeight: 700
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
            <TrendingUpIcon className={classes.greenIcon} />
          </Avatar>
        </ListItemIcon>
        <Grid xs={2} item>
          <ListItemText primary={name} secondary={props.info.description}/>
        </Grid>
        <Grid xs={8} item>
        </Grid>
        <Grid xs={2} className={classes.alignRight} item>
          <ListItemText className="amount" primary={`$${props.info.amount}`} secondary={props.info.type}/>
        </Grid>
      </ListItem>
      <Divider variant="inset" component="li" />
      </List>
  );
}
