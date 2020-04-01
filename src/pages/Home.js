import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CardBusiness from '../components/CardBusiness';
import Box from '@material-ui/core/Box';

import Navbar from '../components/Navbar';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
  }

 componentDidMount() {
    let businesses = this.getAllBusinesses()
  }

   getAllBusinesses = async () => {
    try {
      let response = await fetch('/goal', {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
      let result = await response.json();
      let cards = result.map((biz,i) => {
        return (
          <CardBusiness key={i} info={biz}/>
      )
      })
      this.setState({
        cards: cards
      })
      if (!result.length) throw new Error ()
    }
    catch (err) {
      this.setState({
        errMessage: "Oops! Something went wrong.",
        showError: true
      })
      return;
    }
  }

render() {
  return (
    <div className="Home">
      <Navbar/>
      <div className="section">
      <Container maxWidth="lg" className="container">
        <Grid container spacing={3}>
          <Grid item xs={12} className="home-content">
            <header className="App-header">
              <h1 className="font--yellow noTop--margin">Support COVID-19 Restricted <br></br>Local Businesses & Employees</h1>
              <p>Businesses and employees are suffering hugely at this time. Many businesses will have to close for good and millions of employees have already been laid off indefinitely with no insurance. Our community is looking to help in a lighthearted way by having users create goals they want to acheive for a certain business, and let other users log donations towards those goals.</p>
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
          </Grid>
        </Grid>
  </Container>
  </div>
  <div className="section -grey">
  <Container maxWidth="lg" className="">
    <h2>Current Goals</h2>
    <Grid container item xs={12} className="goal-bar" justify="center" id="goals">
      {this.state.cards}
    </Grid>
    <p>Want to add different goal?</p>
    <Button variant="contained" color="secondary" href="/add-a-business">Add a Goal</Button>
    </Container>
  </div>
    </div>
  )
}
}

export default Home;
