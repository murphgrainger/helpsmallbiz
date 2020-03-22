import React, {Component} from 'react';

import Autocomplete from '../components/Autocomplete';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

import {GOOGLE_API_KEY} from '../constants';

class Support extends Component {
  constructor(props) {
    super(props);

    this.state = {
      privacy: false,
      radio: 'female'
    }
  }
  handleChange = (event) => {
    this.setState({radio: event.target.value});
  };

  handlePrivacySelect = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.checked
    });
  };

  setLocationValue = (value) => {
    this.setState({location: value})
    this.getPlaceDetails(value.place_id)
  }

  getPlaceDetails = (id) => {
    const url = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places&place_id=${id}`

    fetch(url).then(res => res.json()).then(placeDetails => {
      console.log(placeDetails);
    })

  }

  render() {
    return (<> < header className = "App-header" > <h1>Support a Business</h1>
    <ol>
      <li>Find a Business to Support</li>
      <li>Select how you want to support: Gift Card, Donation, Takeout/Delivery</li>
      <li>Show the dollar amount you've supported.</li>
      <li>Decide if you want your support public or anonymous.</li>
    </ol>
  </header>

  <form className="support-form" noValidate="noValidate" autoComplete="off">
    <Grid container="container" spacing={1} alignItems="center">
      <Grid item="item">
        <SearchIcon fontSize="large" xs={1}/>
      </Grid>
      <Grid item="item" xs={10}>
        <Autocomplete setValue={this.setLocationValue}/>
      </Grid>
    </Grid>
    <Grid container="container" spacing={1} alignItems="center">
      <Grid item="item">
        <AttachMoneyIcon fontSize="large"/>
      </Grid>
      <Grid item="item">
        <TextField id="standard-basic" variant="outlined" label="Amount" fullWidth="fullWidth"/>
      </Grid>
    </Grid>
    <Grid container="container" spacing={1} alignItems="center">
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="gender1" value={this.state.radio} onChange={this.handleChange}>
          <FormControlLabel value="donation" control={<Radio />} label="Cash Donation"/>
          <FormControlLabel value="giftcard" control={<Radio />} label="Gift Card"/>
          <FormControlLabel value="remoteorder" control={<Radio />} label="Takeout / Delivery / Online Order"/>
        </RadioGroup>
      </FormControl>
    </Grid>
    <div className="form-footer">
      <Grid container="container" spacing={1} alignItems="center">
        <FormControlLabel control={<Switch checked = {
            this.state.privacy
          }
          onChange = {
            this.handlePrivacySelect
          }
          name = "privacy" />} label="Make My Support Anonymous"/>
      </Grid>
      <Grid container="container" spacing={1} alignItems="center">
        <Button variant="contained" color="secondary" href="/support-a-business">Submit Support</Button>
      </Grid>
    </div>
  </form> < />)
  }
}

export default Support;