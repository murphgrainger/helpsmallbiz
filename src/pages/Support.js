import React from 'react';

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

function Home(props) {
  const [value, setValue] = React.useState('female');
  const [state, setState] = React.useState({
      checkedA: false,
    });

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handlePrivacySelect = event => {
  setState({ ...state, [event.target.name]: event.target.checked });
};


  return (
    <>
      <header className="App-header">
      <h1>Support a Business</h1>
      <ol>
        <li>Find a Business to Support</li>
        <li>Select how you want to support: Gift Card, Donation, Takeout/Delivery</li>
        <li>Show the dollar amount you've supported.</li>
        <li>Decide if you want your support public or anonymous.</li>
      </ol>
      </header>

      <form className="support-form" noValidate autoComplete="off">
      <Grid container spacing={1} alignItems="center">
       <Grid item>
         <SearchIcon fontSize="large" xs={1}/>
       </Grid>
       <Grid item xs={10}>
       <Autocomplete/>
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems="center">
       <Grid item>
         <AttachMoneyIcon fontSize="large"/>
       </Grid>
       <Grid item>
        <TextField id="standard-basic" variant="outlined" label="Amount" fullWidth/>
       </Grid>
     </Grid>
     <Grid container spacing={1} alignItems="center">
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value="female" control={<Radio />} label="Cash Donation" />
          <FormControlLabel value="male" control={<Radio />} label="Gift Card" />
          <FormControlLabel value="other" control={<Radio />} label="Takeout / Delivery / Online Order" />
        </RadioGroup>
      </FormControl>
      </Grid>
      <div className="form-footer">
        <Grid container spacing={1} alignItems="center">
          <FormControlLabel
           control={<Switch checked={state.checkedA} onChange={handlePrivacySelect} name="checkedA" />}
           label="Make My Support Anonymous"
         />
       </Grid>
       <Grid container spacing={1} alignItems="center">
        <Button variant="contained" color="secondary" href="/support-a-business">Submit Support</Button>
        </Grid>
      </div>
      </form>
    </>
  )
}

export default Home;
