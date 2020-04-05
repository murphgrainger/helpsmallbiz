import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


function NavbarSecondary(props) {
  return (
    <AppBar position="static" color="secondary" >
      <Grid container alignItems="flex-start" justify="flex-start">
        <Box mr={1}>
          <Button color="primary" variant="contained" href="/">Back to Home</Button>
        </Box>
      </Grid>
    </AppBar>
  )
}


export default NavbarSecondary;
