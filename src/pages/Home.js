import React from 'react';

import Button from '../components/Button'

function Home() {
  return (
    <>
      <header className="App-header">
      <h1>Pledge 10,000 Colorado</h1>
      <h2>Support Colorado Local Businesses</h2>
      <ul>
        <li>Add or select a business to support</li>
        <li>Pledge an amount</li>
        <li>Buy gift cards or donate via Venmo</li>
        <li>See who others are donating to</li>
      </ul>
      </header>
      <div class="button-wrapper">
        <Button className={'primary block'} text={'Support a Business'} url={'/support-a-business'}/>
      </div>
    </>
  )
}

export default Home;
