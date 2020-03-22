import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

function Home() {
  return (
    <div className="Home">
    <Container maxWidth="lg">
    <Grid container spacing={3}>
    <Grid item xs={7} className="home-content">
      <header className="App-header">
      <h1>Pledge 10,000 for Colorado</h1>
      <h3 className="font--yellow noTop--margin">Support COVID-19 Restricted <br></br>Local Businesses & Employees</h3>
      <ul className="goal-list">
        <li>Our goal is for our community to raise $10,000 via Gift Cards, Cash Donations, and Takeout/Delivery/Online Orders. </li>
        <li>If we reach $10,000 of support, the creators of this app will match the $10,000 and donate it to local businesses.</li>
        <li>Amounts you pledge are based on your own honesty, and go directly to the local business you choose.</li>
      </ul>
      <div className="home-list">
      <h4 className="noBottom--margin noTop--margin font--yellow">How It Works</h4>
      <ol>
        <li>Choose any business to log your support</li>
        <li>Pledge the amount you gave</li>
        <li>Select which way you gave (i.e. Gift Card)</li>
        <li>Submit your amount</li>
      </ol>
      </div>
      </header>
      <div className="button-wrapper">
      <Grid container spacing={1}>
      <Grid item xs={6}>
        <Button variant="outlined" color="secondary" href="/add-a-business">Add a Business</Button>
        </Grid>
        <Grid item xs={6}>
        <Button variant="contained" color="secondary" href="/support-a-business">Support a Business</Button>
        </Grid>
    </Grid>
      </div>
    </Grid>
      <Grid item xs={5} className="side-bar-image">
    </Grid>
    </Grid>
    </Container>
    </div>
  )
}

export default Home;
