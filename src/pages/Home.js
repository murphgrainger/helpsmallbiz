import React from 'react';

import Button from '../components/Button'

function Home() {
  return (
    <>
      <header className="App-header">
      <h1>Support Local Businesses</h1>
      <h4>Either add a new business for others to support, or start supporting a business. People can buy gift cards, donate via Venmo, pledge amounts, or log recent online support.</h4>
      </header>
      <div class="button-wrapper">
        <Button class={'primary block'} text={'Add a Business'} url={'/add-business'}/>
        <Button class={'secondary block'} text={'Support a Business'} url={'#'}/>
      </div>
    </>
  )
}

export default Home;
