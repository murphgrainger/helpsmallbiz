import React, {Component} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FormControl from '@material-ui/core/FormControl';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import IconButton from '@material-ui/core/IconButton';
import LanguageIcon from '@material-ui/icons/Language';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

export default function FormSupport(props) {
  return (
    <form className="support-form" autoComplete="off" onSubmit={props.onSubmit}>
      <h5 className="form-business-title">
         {props.info.businessName} <a href={`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${props.info.place_id}`} target="_blank" rel="noopener noreferrer"><IconButton size="small"><LocationOnIcon fontSize="small"/></IconButton></a>
         <a href={`tel:${props.info.businessPhone}`}><IconButton size="small"><PhoneIcon fontSize="small"/></IconButton></a>
         <a href={props.info.website} target="_blank" rel="noopener noreferrer"><IconButton size="small"><LanguageIcon fontSize="small"/></IconButton></a>
       </h5>
      <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={6}>
             <TextField required id="standard-basic" variant="outlined" name="amount" type="number" step='0.01' label="Amount" fullWidth onChange={props.handleChange} InputProps={{
                startAdornment: (<InputAdornment position="start">
                  <AttachMoneyIcon/>
                </InputAdornment>)
              }}/>
          </Grid>
          <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" fullWidth required>
            <InputLabel id="demo-simple-select-outlined-label" style={{"paddingRight":"8px", "background":"white"}}>How Your Supported</InputLabel>
         <Select
           labelId="demo-simple-select-outlined-label"
           id="demo-simple-select-outlined"
           name="type"
           value={props.type}
           fullWidth
           onChange={props.handleChange}
           label="Age"
         >
                <MenuItem value={"Gift Card"}>Gift Card</MenuItem>
                <MenuItem value={"Donation"}>Donation</MenuItem>
                <MenuItem value={"Delivery"}>Takeout / Delivery</MenuItem>
                <MenuItem value={"Online Order"}>Online Order</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField required id="standard-basic" multiline rowsMax="2" variant="outlined" name="description" label="Why did you choose to support this business?" fullWidth onChange={props.handleChange}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required id="standard-basic" variant="outlined" label="First Name" name="firstName" fullWidth onChange={props.handleChange}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="standard-basic" variant="outlined" label="Last Name" name="lastName" fullWidth onChange={props.handleChange}/>
          </Grid>
          <Grid item xs={12}>
          <FormControlLabel control={<Checkbox required checked = {
              props.terms
            }
            onChange = {
              props.handleChange
            }
            name = "terms" />} label="I am a real human who has logged honest support for this business."/>
          </Grid>
      </Grid>

      <div className="form-footer">
        <Grid container spacing={1} justify="flex-end">
          <Grid item style={{"marginTop": "1em"}}>
            <Button onClick={props.handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="secondary" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>


      </div>
    </form>
  )

}
