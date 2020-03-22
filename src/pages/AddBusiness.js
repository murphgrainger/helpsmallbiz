import React, {Component} from 'react';

import Autocomplete from '../components/Autocomplete';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';


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
    challenge: "",
    terms: false
    }

}


handleChange = (event) => {
  const value = event.target.name === 'terms'? !this.state.terms : event.target.value;
  console.log(event.target);
  this.setState({[event.target.name]:value});
};

setLocationValue = (value) => {
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
    </header>
    <form className="support-form" autoComplete="off" onSubmit={this.onSubmit} >
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
        <p>Your Information &nbsp;</p>
        <Tooltip title="Your name will be displayed publicly attached to this business. Your email will solely be used by the administrator to confirm your progress towards your goal." aria-label="add" placement="right-start"><InfoIcon color="primary" fontSize="small"/></Tooltip>

        <Grid container spacing={1} alignItems="center">
          <Grid item xs={6}>
            <TextField required id="standard-basic" variant="outlined" label="First Name" name="firstName" fullWidth onChange={this.handleChange}/>
          </Grid>
          <Grid item xs={6}>
            <TextField required id="standard-basic" variant="outlined" label="Last Name" name="lastName" fullWidth onChange={this.handleChange}/>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField required id="standard-basic" variant="outlined" type="email" label="Email" name="email" fullWidth onChange={this.handleChange}/>
        </Grid>
      </Grid>

      <div className="form-footer">
      <Grid container spacing={1} alignItems="center" justify="center">
        <FormControlLabel
        control={<Checkbox checked={this.state.terms} onChange={this.handleChange} name="terms" />}
        label="I understand my email will not be distributed or displayed and only used by the administrator of this app to verify my submission and completion of my goal."

        />
      </Grid>
      <Box mt={2}>
        <Grid container spacing={1} alignItems="center" justify="center" >
          <Button className="submit-button" type="submit" variant="contained" color="secondary">Add Business</Button>
        </Grid>
      </Box>
      </div>
    </form>
  </div>
</>
)
}
}

export default AddBusiness;
