import React from 'react';

import Button from '../components/Button'

function Home() {
  return (
    <>
      <header className="App-header">
      <h1>Oops! Looks like this link doesn't exist.</h1>
      </header>
      <div class="button-wrapper">
        <Button class={'primary block'} text={'Go Back to Home'} url={'/'}/>
      </div>
    </>
  )
}

export default Home;
