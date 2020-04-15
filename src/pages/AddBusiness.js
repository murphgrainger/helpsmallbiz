import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import accounting from 'accounting';

import Container from '@material-ui/core/Container';
import Navbar from '../components/NavbarSecondary';

import Autocomplete from '../components/Autocomplete';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailOutlineSharpIcon from '@material-ui/icons/MailOutlineSharp';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CurrencyInput from '../components/CurrencyInput';
import Footer from '../components/Footer';

class AddBusiness extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      description: "",
      challenge: "",
      terms: false,
      placeSelected: "",
      placeDetails: "",
      businessName: "",
      businessAddress: "",
      businessPhone: "",
      businessPhoto: "",
      website: "",
      place_id:"",
      amount:"",
      showError: false
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
    if(value) this.getPlaceDetails(value.place_id);
  }

  async getPlaceDetails(id) {
    let service = window && window.google ? new window.google.maps.places.PlacesService(document.createElement('div')): "";

    await service.getDetails({
      placeId: id
    }, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        this.setState({
          placeSelected: true,
          businessName: place.name,
          businessAddress: place.formatted_address,
          businessPhone: place.formatted_phone_number,
          website: place.website,
          place_id: place.place_id,
        })
      }
    })
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, description, challenge, businessName, place_id, amount, businessAddress, businessPhone, website } = this.state;
    const data = { firstName, lastName, email, description, challenge, businessName, place_id, amount, businessAddress, businessPhone, website };
    data.amount = accounting.unformat(data.amount);
      try {
        let response = await fetch('/goal/add', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'content-type': 'application/json'
          }
        })
        let result = await response.json();
        if (result.status !== 200) throw new Error ()
        this.props.history.push('/');
      }
  catch {
    this.setState({
      errMessage: "Oops! Something went wrong.",
      showError: true
    })

  }
}

  render() {
    return (
      <>
      <Navbar/>
      <div className="section Support">
    <Container maxWidth="lg" className="container">
      <div className = "form-wrapper" > <header className="form-header">
      <h2>Add a Challenge</h2>
    </header>
    <form className="support-form" autoComplete="off" onSubmit={this.onSubmit}>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12}>
          <Autocomplete setValue={this.setLocationValue}/>
        </Grid>
          <Grid item xs={12}>
            <TextField required id="standard-basic" multiline rowsMax="2" variant="outlined" name="description" label="Why did you choose this business?" fullWidth onChange={this.handleChange}/>
          </Grid>
          <Grid item xs={12}>
              <p className="challenge-label">Your Information</p>
            </Grid>
          <Grid item xs={6}>
            <TextField required id="standard-basic" variant="outlined" label="First Name" name="firstName" fullWidth onChange={this.handleChange}/>
          </Grid>
          <Grid item xs={6}>
            <TextField id="standard-basic" variant="outlined" label="Last Name" name="lastName" fullWidth onChange={this.handleChange}/>
          </Grid>
          <Grid item xs={12}>
            <TextField required id="standard-basic" variant="outlined" type="email" label="Email" name="email" placeholder="for internal use only" fullWidth onChange={this.handleChange}/>
          </Grid>
          <Grid item xs={12}>
              <p className="challenge-label" style={{"marginBottom":"0"}}>Your Challenge</p>
          </Grid>
          <Grid item xs={12} className="challenge-group" sm={6}>
            <p className="challenge-span">If we log &nbsp;&nbsp;&nbsp;&nbsp; </p>
            <CurrencyInput type="text" handleChange={this.handleChange} amount={this.state.amount}/>
              <p className="challenge-span">I will...</p>
             </Grid>
             <Grid item xs={12}>
               <TextField required id="standard-basic" multiline rowsMax="2" variant="outlined" name="challenge" placeholder="ex: order 10 pizzas for my street." fullWidth onChange={this.handleChange}/>
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
            name = "terms" />} label="I understand my email will not be distributed or displayed. Solely the administrator will look at this information to see if I'm a real human."/>
        </Grid>
        <Box mt={2}>
          <Grid container spacing={1} alignItems="center" justify="center">
            <Button className="submit-button" type="submit" variant="contained" color="secondary">Add Challenge</Button>
          </Grid>
        </Box>
        {this.state.showError &&
          <Box mt={2}>
            <p>{this.state.errMessage}</p>
          </Box>
        }
      </div>
    </form>
  </div> </Container>

  </div>
  <Footer color="secondary"/>
</>
)
}
}

export default withRouter(AddBusiness);
