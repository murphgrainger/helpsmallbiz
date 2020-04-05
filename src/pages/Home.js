import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CardBusiness from '../components/CardBusiness';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

import Image from '../assets/images/palm-icon.png'

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
              <img src={Image}></img>
              <h4 className="sub-header">Welcome to Our</h4>
              <h1 className="noTop--margin">Small Biz Support<br></br>Challenge</h1>
            </header>
          </Grid>
        </Grid>
  </Container>
  </div>
  <div className="section -thin -red">
    <Container maxWidth="md" className="container">
      <h4 className="text-white font-secondary">Small businesses and employees are suffering hugely right now. Many businesses will have to close forgood and millions of employees have already been laid off indefinitely with no insurance.</h4>
    </Container>
  </div>
  <div className="section -white">
    <Container maxWidth="md" className="container">
      <h2 className="text-green secondary-subheader">WE BUILT THIS SITE TO MAKE SUPPORTING LOCAL BUSINESSES <br></br>FUN AND PERSONAL.</h2>
        <Grid container spacing={5} justify="center" className="home-howto">
          <Grid item md={4}>
            <Card>
              <CardContent>
            <span className="list-icon">1</span>
            <h5 className="text-red">You Create a Challenge</h5>
            <p>to incentivize your friends to support a local business you care about</p>
              <Divider />
              <p>Patrick says "I'll time lapse myself eating a large pizza if we contribute $400 to Parisi Tavernetta."</p>
              </CardContent>
              </Card>
          </Grid>
            <Grid item md={4}>
              <Card>
                <CardContent>
              <span className="list-icon">2</span>
              <h5 className="text-red">Get Friends to Log Support</h5>
              <p>to your challenge through orders, gift cards, deliveries, and beyond</p>
                <Divider />
                <ul>
                <li>Sarah order $50 delivery</li>
                <li>Roque bough $10 gift card</li>
                <li>Brooke donated $40</li>
          </ul>
        </CardContent>

        </Card>
            </Grid>
              <Grid item md={4}>
                <Card>
                  <CardContent>
                <span className="list-icon">3</span>
                <h5 className="text-red">Everyone Wins</h5>
                <p>as challenges are met, businesses make $ and friends do great things</p>
                  <Divider />
                  <ul>
                  <li>Parisi gets $400 of sales</li>
                  <li>Friends feel great</li>
                  <li>Patrick feels awful proud</li>
                  </ul>
                  </CardContent>
                </Card>
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
