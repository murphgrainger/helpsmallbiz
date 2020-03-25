import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


function Navbar(props) {
  return (
    <AppBar position="static" color="secondary" >
      <Grid container alignItems="flex-end" justify="flex-end">
        <Box mr={1}>
          <Button color="primary" variant="outlined" href="#goals">Support a Goal</Button>
        </Box>
        <Button color="primary" variant="outlined" href="/add-a-business">Add a Goal</Button>
      </Grid>
    </AppBar>
  )
}


export default Navbar;
