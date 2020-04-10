import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarIcon from '@material-ui/icons/Star';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PledgeCard from './CardHorizontal';
import Dialog from './Dialog';
import PersonIcon from '@material-ui/icons/Person';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'left',
    flexWrap: 'wrap',
    marginBottom: 20,
    position: 'relative',
    overflow: 'visible'
  },
  header: {
    background: "#e6e6e6",
    padding: 16,
    minHeight: 78,
    display: "flex",
    alignItems: "center"
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'rgba(15,53,66,.6)',
    color: 'white'
  },
  wrapper: {
    padding: '12px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
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
  greenIcon: {
    color: "#1B5460",
    fontWeight: 700
  },
  redIcon: {
    color: "#CA3739",
    fontWeight: 700
  },
  spaceBetween: {
    justifyContent: "space-between",
    padding: "0 16px 12px 16px"
  },
  spanText: {
    color: "#1B5460",
    fontSize: 12
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
    if (window && window.google) {
      let service = new window.google.maps.places.PlacesService(document.createElement('div'));
      await service.getDetails({
        placeId: biz.place_id
      }, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && place.photos) {
          this.setState({
            photoUrl:place.photos[0].getUrl()
          })
        }
      })
    }
  };

render() {
  const { classes } = this.props;
  const pledges = this.props.info.pledges.map((pledge, i) => {
    return (<PledgeCard key={i} info={pledge}/>)
  })

  const amountToGoal = this.props.info.amount - this.props.info.amountRaised;

  return (
    <Card className={classes.root}>
      {amountToGoal <= 0 ?
        <div className="challenge-complete"><CheckCircleIcon fontSize="large" className={classes.greenIcon}/></div>
        : null
      }
      <Grid item xs={12} style={{'display':'flex', 'flexWrap':'wrap'}}>
      <CardMedia
        className='card-media'
        image={this.state.photoUrl}>
       <div className={classes.overlay}>
         <div className={classes.wrapper}>
           <h3 className="card-business-title">
              {this.props.info.businessName}
            </h3>
              <div>
                <a href={`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${this.props.info.place_id}`} target="_blank" rel="noopener noreferrer"><IconButton size="small"><LocationOnIcon className={classes.whiteIcon} fontSize="small"/></IconButton></a>
                <a href={`tel:${this.props.info.businessPhone}`}><IconButton size="small"><PhoneIcon className={classes.whiteIcon} fontSize="small"/></IconButton></a>
                <a href={this.props.info.website} target="_blank" rel="noopener noreferrer"><IconButton size="small"><LanguageIcon className={classes.whiteIcon} fontSize="small"/></IconButton></a>
            </div>
          </div>
       </div>
       </CardMedia>
   <Grid item xs={12} md={9}>
     <Grid container justify="space-between" className={classes.header}>
       <Grid item md={9} className={classes.alignLeft}>
          <Typography variant="h6" className="text-red" component="p">
            <StarIcon fontSize="small" className="text-red"/> If we log ${this.props.info.amount}, I will {this.props.info.challenge}
          </Typography>
       </Grid>
       <Grid item md={3} className={classes.alignRight} style={{"position":"relative"}}>
           {this.props.info.amountRaised > 0
             ? <Typography variant="h5" color="textSecondary" component="p" className={classes.greenIcon}>${this.props.info.amountRaised}</Typography>
           : <Typography variant="h5" color="textSecondary" component="p" className={classes.greenIcon}>$0.00</Typography>}
              <span className={classes.spanText}>of ${this.props.info.amount} logged</span>
       </Grid>
     </Grid>
   <CardContent className={classes.cardContent}>
     <p variant="body1" component="p" className={classes.greenIcon} style={{"display": "flex", "alignItems":"center", "margin": "0"}}>
       <PersonIcon size="small" className={classes.greenIcon} style={{"marginRight":"6px"}}/>{`${this.props.info.firstName} ${this.props.info.lastName}`}
     </p>
     <Typography variant="body2" color="textSecondary" component="p" style={{"marginLeft": "30px"}}>
       {this.props.info.description}
     </Typography>
      </CardContent>
        <CardActions className={classes.spaceBetween}>
          <Dialog info={this.props.info} refreshBusinesses={this.props.refreshBusinesses}/>
          {
            pledges.length ?
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
              : null
          }

        </CardActions>
    </Grid>
  </Grid>
    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit style={{'width': '100%'}}>
      <div className={classes.expandedContent}>
        { pledges }
      </div>
    </Collapse>
    </Card>
  );
}
}

export default withStyles(styles)(CardBusiness);
