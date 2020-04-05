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

import PledgeCard from './CardHorizontal';

import { GOOGLE_API_KEY } from '../constants';


const styles = theme => ({
  root: {
    width: '100%',
    margin: 12,
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'left',
    flexWrap: 'wrap'
  },
  header: {
    background: "#e6e6e6",
    padding: 16
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    background: 'rgba(15,53,66,.6)',
    color: 'white'
  },
  wrapper: {
    padding: '1em'
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
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexGrow: 2,
  },
  expandedContent: {
    background: '#f1f1f1'
  },
  alignRight: {
    textAlign: "right"
  },
  alignLeft: {
    textAlign: "left"
  },
  whiteIcon: {
    color: "white"
  },
  spaceBetween: {
    justifyContent: "space-between"
  }
});

class CardBusiness extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: true,
      photoUrl: "",
      noPledges: false,
      pledges: []
    }
  }

  componentDidMount() {
      this.getPlaceDetails(this.props.info);
  }


  handleExpandClick = async () => {
    this.setState({expanded: !this.state.expanded})
  };

  getPlaceDetails = async (biz) => {
    let service = new window.google.maps.places.PlacesService(document.createElement('div'));
    await service.getDetails({
      placeId: biz.place_id
    }, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        this.setState({
          photoUrl:place.photos[0].getUrl()
        })
      }
    })
  };

render() {
  const { classes } = this.props;
  const pledges = this.props.info.pledges.map((pledge, i) => {
    return (<PledgeCard key={i} info={pledge}/>)
  })
  return (
    <Card className={classes.root}>
      <CardMedia
        className='card-media'
        image={this.state.photoUrl}
        title={this.props.info.businessName}>
       <div className={classes.overlay}>
         <div className={classes.wrapper}>
           <Typography variant="h5" component="h2">
              {this.props.info.businessName}
                </Typography>
                <div><a href={`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${this.props.info.place_id}`} target="_blank"><IconButton size="small"><LocationOnIcon className={classes.whiteIcon} fontSize="small"/></IconButton></a>
                <a href={`tel:${this.props.info.businessPhone}`}><IconButton size="small"><PhoneIcon className={classes.whiteIcon} fontSize="small"/></IconButton></a>
                <a href={this.props.info.website} target="_blank"><IconButton size="small"><LanguageIcon className={classes.whiteIcon} fontSize="small"/></IconButton></a>
            </div>
          </div>
       </div>
       </CardMedia>

   <Grid item md={9}>
     <Grid container spacing={1} justify="space-between" className={classes.header}>
       <Grid item md={10} className={classes.alignLeft}>
          <Typography variant="h6" className="text-red" component="p">
            <StarIcon fontSize="small" className="text-red"/> {this.props.info.challenge}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <PersonIcon/>{` ${this.props.info.firstName} ${this.props.info.lastName}`}
          </Typography>
       </Grid>
       <Grid item md={2} className={classes.alignRight}>
         <Typography variant="h5" color="textSecondary" component="p">
           ${this.props.info.amountRaised || 0}
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
           Raised
         </Typography>
       </Grid>
     </Grid>
   <CardContent className={classes.cardContent}>
     <Typography variant="body2" color="textSecondary" component="p">
       <strong>The Why: </strong>{this.props.info.description}
     </Typography>
      </CardContent>
        <CardActions className={classes.spaceBetween}>
          <Link to={{pathname: "/support-a-business", state:{business: this.props.info}}} style={{ textDecoration: 'none' }}>
            <Button size="small" color="primary" variant="contained">
              Pledge Support
            </Button>
          </Link>
          <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
        </CardActions>
      <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
        <div className={classes.expandedContent}>
          { pledges }
        </div>
      </Collapse>
    </Grid>
    </Card>
  );
}
}

export default withStyles(styles)(CardBusiness);
