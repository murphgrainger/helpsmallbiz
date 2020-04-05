import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../components/NavbarSecondary';

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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import Switch from '@material-ui/core/Switch';

import CardContact from '../components/CardContact';


import MaskedInput from 'react-text-mask'


class Support extends Component {
  constructor(props) {
    super(props);

    this.state = {
      business: {},
      firstName: "",
      lastName: "",
      email: "",
      instragram: "",
      description: "",
      amount: "",
      type: "",
      anonymous: false,
      terms: false
    }
  }

  componentDidMount() {
    if (this.props.location.state && this.props.location.state.business) {
          const {business} = this.props.location.state;
          this.setState({business: business})
      } else {
        this.props.history.push('/')
      }
    }

  handleChange = (event) => {
    const value = event.target.name === 'terms' || event.target.name === 'anonymous'
      ? !this.state[event.target.name]
      : event.target.value;
    this.setState({
      [event.target.name]: value
    });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const {
      firstName,
      lastName,
      email,
      description,
      amount,
      type,
      instagram,
      anonymous
    } = this.state;
    const data = {
      firstName,
      lastName,
      email,
      description,
      amount,
      type,
      instagram,
      anonymous
    };
    try {
      let response = await fetch(`/pledge/${this.state.business.id}`, {
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
      <h2>Pledge Your Support</h2>
    </header>
    <form className="support-form" autoComplete="off" onSubmit={this.onSubmit}>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12} container justify="center">
          <CardContact info={this.state.business}/>
        </Grid>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12}>
            <TextField required id="standard-basic" multiline rowsMax="2" variant="outlined" name="description" label="Why did you choose to support this business goal?" fullWidth onChange={this.handleChange}/>
          </Grid>
          <Grid item xs={12}>
             <TextField required id="standard-basic" variant="outlined" name="amount" type="number" label="Amount" fullWidth onChange={this.handleChange} InputProps={{
                startAdornment: (<InputAdornment position="start">
                  <AttachMoneyIcon/>
                </InputAdornment>)
              }}/>
          </Grid>
          <FormLabel component="legend" className="radio-label">Log How You Supported this Goal</FormLabel>
          <Grid container spacing={1} alignItems="center">
          <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="type" value={this.state.radio} onChange={this.handleChange}>
              <FormControlLabel value="Gift Card" control={<Radio />} label="Gift Card" />
              <FormControlLabel value="Cash Donation" control={<Radio />} label="Cash Donation" />
              <FormControlLabel value="Remote Order" control={<Radio />} label="Online Order / Delivery / Takeout" />
              <FormControlLabel value="Other"  control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </Grid>
        </Grid>
          <FormLabel component="legend" className="form-label--info">Your Info &nbsp;</FormLabel>
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
          <FormControlLabel
            control={<Switch checked={this.state.anonymous} onChange={this.handleChange} name="anonymous" />}
            label="Make my pledge anonymous."
          />
        </Grid>
      </Grid>
      <div className="form-footer">
        <Grid container spacing={1}>
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
            <Button className="submit-button" type="submit" variant="contained" color="secondary">Pledge Support</Button>
          </Grid>
        </Box>
      </div>
    </form>
  </div> </Container></div></>
)
}
}

export default Support;
