import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


function Footer(props) {
  return (
    <AppBar position="static" className="Footer" color={props.color}>
      <Grid container alignItems="center" justify="center">
        <p>Questions? Have improvement ideas? <a href="mailto:2020localbiz.challenge@gmail.com">Email Us</a></p>
      </Grid>
    </AppBar>
  )
}


export default Footer;
