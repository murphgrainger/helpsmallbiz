import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


function Navbar(props) {
  return (
    <AppBar position="static" className="Navbar" >
      <Grid container alignItems="flex-end" justify="flex-end">
        <Box mr={1}>
          <Button color="primary" variant="outlined" href="/add-a-challenge">Add a Challenge</Button>
        </Box>
        <Button color="secondary" variant="contained" href="#challenges">Log Support</Button>
      </Grid>
    </AppBar>
  )
}


export default Navbar;
