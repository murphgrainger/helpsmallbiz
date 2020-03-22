import React, {Component} from 'react';

import Autocomplete from '../components/Autocomplete';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

import { GOOGLE_API_KEY } from '../constants';

class AddBusiness extends Component {
constructor(props){
super(props);

  this.state = {
    businessName: "",
    businessAddress: "",
    firstName: "",
    lastName: "",
    email: "",
    description: "",
    challenge: ""
    }

}


handleChange = (event) => {
  this.setState({[event.target.name]:event.target.value});
};

setLocationValue = (value) => {
  console.log(value);
  this.setState({
    businessName: value.structured_formatting.main_text,
    businessAddress: value.structured_formatting.secondary_text
  })
}

onSubmit = (event) => {
  event.preventDefault();
  console.log(this.state);

}

render() {
return (
<>
  <div className="form-wrapper">
    <header className="form-header">
      <h1>Add a Business</h1>
      <ol>
        <li>Find a Business to Support</li>
        <li>Say Who You Are</li>
        <li>Describe why you chose this business.</li>
        <li>Create a goal for how you want to support them.</li>
      </ol>
    </header>

    <form className="support-form" noValidate autoComplete="off" onSubmit={this.onSubmit} >
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12}>
          <Autocomplete required setValue={this.setLocationValue} />
        </Grid>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12}>
            <TextField required id="standard-basic" multiline rowsMax="2" variant="outlined" name="description" label="Why did you choose this business?" fullWidth onChange={this.handleChange}/>
          </Grid>
          <Grid item xs={12}>
            <TextField required id="standard-basic" multiline rowsMax="2" variant="outlined" name="challenge" label="Your Challenge" fullWidth onChange={this.handleChange}/>
          </Grid>
        </Grid>
        <p>Your Information</p>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={6}>
            <TextField required id="standard-basic" variant="outlined" label="First Name" name="firstName" fullWidth onChange={this.handleChange}/>
          </Grid>
          <Grid item xs={6}>
            <TextField required id="standard-basic" variant="outlined" label="Last Name" name="lastName" fullWidth onChange={this.handleChange}/>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField required id="standard-basic" variant="outlined" label="Email" name="email" fullWidth onChange={this.handleChange}/>
        </Grid>
      </Grid>

      <div className="form-footer">
        <Grid container spacing={1} alignItems="center">
          <Button type="submit" variant="contained" color="secondary">Add Business</Button>
        </Grid>
      </div>
    </form>
  </div>
</>
)
}
}

export default AddBusiness;
