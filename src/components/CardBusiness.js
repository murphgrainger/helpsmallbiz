import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
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

const styles = theme => ({
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
});

class CardBusiness extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      noPledges: false
    }
  }


  handleExpandClick = async () => {
    if (!this.state.expanded) {

    try {
      let response = await fetch(`/goal/${this.props.info.id}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
      let result = await response.json()
      if (result.status !==200 || !result.pledges.length) throw new Error()
      console.log(result.pledges);
      this.setState({
        expanded: true,
      })
    }
    catch {
      this.setState({
        noPledges: true,
        expanded: true,
      })
    }
  } else {
    this.setState({expanded: !this.state.expanded})
  }
  };

render() {
  const { classes } = this.props;

  return (
    <Card className={classes.root}>
      <CardMedia
       className={classes.media}
       image={image}
       title={this.props.info.businessName}
     />
   <Grid item xs={9}>
     <Grid container spacing={1} justify="space-between" className={classes.header}>
       <Grid item xs={8} className={classes.alignLeft}>
         <Typography variant="h5" component="h2">
            {this.props.info.businessName}
            <a href={`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${this.props.info.place_id}`} target="_blank"><IconButton size="small"><LocationOnIcon fontSize="small"/></IconButton></a>
            <a href={`tel:${this.props.info.businessPhone}`}><IconButton size="small"><PhoneIcon fontSize="small"/></IconButton></a>
            <a href={this.props.info.website} target="_blank"><IconButton size="small"><LanguageIcon fontSize="small"/></IconButton></a>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.props.info.description}
          </Typography>
       </Grid>
       <Grid item xs={4} className={classes.alignRight}>
         <Typography variant="h5" color="textSecondary" component="p">
           ${this.props.info.amountRaised} Raised
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
           Goal In Progress
         </Typography>
       </Grid>
     </Grid>
   <CardContent className={classes.cardContent}>
     <Typography variant="body2" color="textSecondary" component="p">
       <PersonIcon/>{`${this.props.info.firstName} ${this.props.info.lastName}`}
     </Typography>
        <Typography variant="h6" color="textSecondary" component="p">
          <StarIcon fontSize="small"/>{this.props.info.challenge}
        </Typography>
      </CardContent>
      <CardActions>
        <CardActions>
          <Button
            className={clsx(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="show more"
            size="small" color="primary" variant="outlined">See Contributions
                </Button>
          <Link to={{pathname: "/support-a-business", state:{business: this.props.info}}} style={{ textDecoration: 'none' }}>
            <Button size="small" color="primary" variant="contained">
              Log Support
            </Button>
          </Link>
        </CardActions>
      </CardActions>
      <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
        <CardContent>

          {this.state.noPledges ? <Typography paragraph>There are currently no pledges towards this goal. Click Log Support above to add one!          </Typography>
 : null }
        </CardContent>
      </Collapse>
    </Grid>
    </Card>
  );
}
}

export default withStyles(styles)(CardBusiness);
