import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';


function Navbar(props) {
  return (
    <AppBar position="static" color="secondary" >
      <Grid container alignItems="flex-end" justify="flex-end">
        <Button color="inherit" variant="outlined" href="/">Home</Button>
      </Grid>
    </AppBar>
  )
}


export default Navbar;
