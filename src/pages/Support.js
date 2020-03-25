import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
import InstagramIcon from '@material-ui/icons/Instagram';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailOutlineSharpIcon from '@material-ui/icons/MailOutlineSharp';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CardContact from '../components/CardContact';

import MaskedInput from 'react-text-mask'


class Support extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      description: "",
      terms: false,
      businessName: "",
      business: {}
    }
  }

  componentDidMount() {
    if (this.props.location.state && this.props.location.state.business) {
          const {business} = this.props.location.state;
          this.setState({business: business, businessName: business.businessName})
      } else {
        this.props.history.push('/')
      }
    }

  handleChange = (event) => {
    const value = event.target.name === 'terms'
      ? !this.state.terms
      : event.target.value;
    this.setState({
      [event.target.name]: value
    });
  };

  setLocationValue = (value) => {
    console.log(value.place_id);
    this.getPlaceDetails(value.place_id)
  }

  async getPlaceDetails(id) {
    let service = new window.google.maps.places.PlacesService(document.createElement('div'));

    await service.getDetails({
      placeId: id
    }, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        this.setState({
          placeSelected: true,
          businessName: place.name,
          businessAddress: place.formatted_address,
          businessPhone: place.formatted_phone_number,
          businessWebsite: place.website,
          place_id: place.place_id
        })
      }
    })
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const {
      firstName,
      lastName,
      email,
      description,
      challenge,
      businessName,
      place_id,
      instagram
    } = this.state;
    const data = {
      firstName,
      lastName,
      email,
      description,
      challenge,
      businessName,
      place_id,
      instagram
    };
    let response = await fetch('/add-business', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      }
    })
    let result = await response.json();
    console.log(result);
  }

  render() {
    return (<>

      <div className = "form-wrapper" > <header className="form-header">
      <h1>Log Your Support</h1>
    </header>
    <form className="support-form" autoComplete="off" onSubmit={this.onSubmit}>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12} container justify="center">
          <CardContact info={this.state.business}/>
        </Grid>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12}>
            <TextField required id="standard-basic" multiline rowsMax="2" variant="outlined" name="description" label="Why did you choose this business?" fullWidth onChange={this.handleChange}/>
          </Grid>
          <Grid item xs={12}>
             <TextField required id="standard-basic" multiline rowsMax="2" variant="outlined" name="amount" label="Amount" fullWidth onChange={this.handleChange} InputProps={{
                startAdornment: (<InputAdornment position="start">
                  <AttachMoneyIcon/>
                </InputAdornment>)
              }}/>
          </Grid>
        </Grid>
        <p>Your Information &nbsp;</p>
        <Tooltip title="Your name will be displayed publicly attached to this business. Your instagram handle will also appear if you share it.  Your email will solely be used for internal communication from the administrator." aria-label="add" placement="right-start">
          <InfoIcon color="primary" fontSize="small"/>
        </Tooltip>

        <Grid container spacing={1} alignItems="center">
          <Grid item xs={6}>
            <TextField required id="standard-basic" variant="outlined" label="First Name" name="firstName" fullWidth onChange={this.handleChange}/>
          </Grid>
          <Grid item xs={6}>
            <TextField required id="standard-basic" variant="outlined" label="Last Name" name="lastName" fullWidth onChange={this.handleChange}/>
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center">

          <Grid item xs={6}>
            <TextField required id="standard-basic" variant="outlined" type="email" label="Email" name="email" placeholder="for internal use only" fullWidth onChange={this.handleChange} InputProps={{
                startAdornment: (<InputAdornment position="start">
                  <MailOutlineSharpIcon/>
                </InputAdornment>)
              }}/>
          </Grid>
          <Grid item xs={6}>
            <TextField id="standard-basic" variant="outlined" label="Instagram Handle" name="instagram" placeholder="optional" fullWidth onChange={this.handleChange} InputProps={{
                startAdornment: (<InputAdornment position="start">
                  <InstagramIcon/>
                </InputAdornment>)
              }}/>
          </Grid>
        </Grid>
      </Grid>
      <div className="form-footer">
        <Grid container spacing={1} alignItems="center" justify="center">
          <FormControlLabel control={<Checkbox required checked = {
              this.state.terms
            }
            onChange = {
              this.handleChange
            }
            name = "terms" />} label="I understand my email will not be distributed or displayed and only will be used by the administrator of this app to verify my submission and completion of my goal."/>
        </Grid>
        <Box mt={2}>
          <Grid container spacing={1} alignItems="center" justify="center">
            <Button className="submit-button" type="submit" variant="contained" color="secondary">Add Business</Button>
          </Grid>
        </Box>
      </div>
    </form>
  </div> < />
)
}
}

export default Support;
