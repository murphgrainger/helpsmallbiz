import React from 'react';

import Autocomplete from '../components/Autocomplete';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

function Home(props) {

  const [state, setState] = React.useState({
     giftCard: true,
     donation: false,
     takeout: false,
   });

  const handleChange = event => {
  setState({ ...state, [event.target.name]: event.target.checked });
};

const { giftCard, donation, takeout } = state;
const error = [giftCard, donation, takeout].filter(v => v).length !== 2;


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
        <div style={{"width":"100%"}}>
        <Autocomplete/>
        </div>
        <div className="donation-types">
        <FormControl component="fieldset" >
          <FormLabel component="legend">How Did You Donate</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={giftCard} onChange={handleChange} name="giftCard" />}
              label="Gift Card"
            />
            <FormControlLabel
              control={<Checkbox checked={donation} onChange={handleChange} name="donation" />}
              label="Donation"
            />
            <FormControlLabel
              control={<Checkbox checked={takeout} onChange={handleChange} name="takeout" />}
              label="Takeout / Delivery"
            />
          </FormGroup>
        </FormControl>
        </div>
        <div className="donation-types">
        <TextField id="standard-basic" variant="outlined" label="Amount" fullWidth/>
        </div>
      </form>
    </>
  )
}

export default Home;
