import React from 'react';

import Autocomplete from '../components/Autocomplete';

function Home() {
  return (
    <>
      <header className="App-header">
      <h1>Support a Business</h1>
      <ol>
        <li>Find a Business to Support</li>
        <li>Select how you want to support: Gift Card, Donation, Takeout/Delivery</li>
        <li>Show the dollar amount you've supported.</li>
        <li>Decide if you want your support public or anonymous.</li>
      </ol>
      </header>

      <form className="support-form" noValidate autoComplete="off">
        <Autocomplete/>
      </form>
    </>
  )
}

export default Home;
