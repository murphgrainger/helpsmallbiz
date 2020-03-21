import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

function Home() {
  return (
    <div className="Home">
    <Container maxWidth="lg">
    <Grid container spacing={3}>
    <Grid item xs={6} className="home-content">
      <header className="App-header">
      <h1>Pledge 10,000 Colorado</h1>
      <h3>Support Colorado Local Businesses During COVID-19 Restrictions</h3>
      <p>Log a way you have supported a local business - any business! If we reach $10,000 of support the creators of this app will match $10,000.  All amounts go directly to local businesses with no profit for any third-party in mind.  This is a bootstrapped effort that trusts your honesty of the amounts you've submitted.</p>
      <h4>How It Works</h4>
      <ul>
        <li>Choose a business to log your support</li>
        <li>Pledge an amount</li>
        <li>Select how you supported them: donation, gift card, takeout / delivery / online order.</li>
        <li>See who others are donating to</li>
      </ul>
      </header>
      <div className="button-wrapper">
        <Button variant="contained" color="secondary" href="/support-a-business">Support a Business</Button>
      </div>
    </Grid>
      <Grid item xs={6} className="side-bar-image">
    </Grid>
    </Grid>
    </Container>
    </div>
  )
}

export default Home;
