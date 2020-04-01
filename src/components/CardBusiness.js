import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LanguageIcon from '@material-ui/icons/Language';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarIcon from '@material-ui/icons/Star';
import DescriptionIcon from '@material-ui/icons/Description';
import PersonIcon from '@material-ui/icons/Person';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import image from '../assets/images/tennyson-st.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: 12,
    display: 'flex',
    flexDirection: 'row'
  },
  header: {
    background: "#f1eebf",
    padding: 16
  },
  media: {
    flexGrow: 1,
    height: '100%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexGrow: 2
  },
  alignRight: {
    textAlign: "right"
  },
  alignLeft: {
    textAlign: "left"
  }
}));

export default function CardBusiness(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
       className={classes.media}
       image={image}
       title={props.info.businessName}
     />
   <Grid item xs={9}>
     <Grid container spacing={1} justify="space-between" className={classes.header}>
       <Grid item xs={9} className={classes.alignLeft}>
         <Typography variant="h5" component="h2">
            {props.info.businessName}
            <a href={`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${props.info.place_id}`} target="_blank"><IconButton size="small"><LocationOnIcon fontSize="small"/></IconButton></a>
            <a href={`tel:${props.info.businessPhone}`}><IconButton size="small"><PhoneIcon fontSize="small"/></IconButton></a>
            <a href={props.info.website} target="_blank"><IconButton size="small"><LanguageIcon fontSize="small"/></IconButton></a>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.info.description}
          </Typography>
       </Grid>
       <Grid item xs={3} className={classes.alignRight}>
         <Typography variant="h5" color="textSecondary" component="p">
           $1000 Raised
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
           Goal In Progress
         </Typography>
       </Grid>
     </Grid>
   <CardContent className={classes.cardContent}>
     <Typography variant="body2" color="textSecondary" component="p">
       <PersonIcon/>{`${props.info.firstName} ${props.info.lastName}`}
     </Typography>
        <Typography variant="h6" color="textSecondary" component="p">
          <StarIcon fontSize="small"/>{props.info.challenge}
        </Typography>
      </CardContent>
      <CardActions>
        <CardActions>
          <Button
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            size="small" color="primary" variant="outlined">See Contributions
                </Button>
          <Link to={{pathname: "/support-a-business", state:{business: props.info}}} style={{ textDecoration: 'none' }}>
            <Button size="small" color="primary" variant="contained">
              Log Support
            </Button>
          </Link>
        </CardActions>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          {props.info.businessPhone}
          {props.info.website}
          </Typography>
        </CardContent>
      </Collapse>
    </Grid>
    </Card>
  );
}
