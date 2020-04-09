import React from 'react';

import Button from '@material-ui/core/Button';

function Home() {
  return (
    <div className="four-oh-four">
      <header className="App-header">
      <h1>Oops! Looks like this link doesn't exist.</h1>
      </header>
      <div class="button-wrapper">
        <Button variant="contained" color="primary" href="/">Go Back to Home</Button>
      </div>
    </div>
  )
}

export default Home;
