import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LanguageIcon from '@material-ui/icons/Language';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import image from '../assets/images/tennyson-st.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#fff',
  },
}));

export default function CardBusiness(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
    <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${props.info.firstName} ${props.info.lastName}`}
        subheader="12pm today"
      />
      <CardMedia
       className={classes.media}
       image={image}
       title={props.info.businessName}
     />
      <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
         {props.info.businessName}
       </Typography>
       <Typography variant="body2" color="textSecondary" component="p">
         {props.info.businessAddress}
       </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.info.description}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.info.challenge}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <CardActions>
      <Button size="small" color="primary" variant="outlined">
        Log Support
      </Button>
    </CardActions>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <Button size="small" color="primary" variant="outlined">
          See Goal
        </Button>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          {props.info.challenge}
          {props.info.businessPhone}
          {props.info.website}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
