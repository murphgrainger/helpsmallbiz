import React from 'react';

import Button from './components/Button';
import logo from './assets/logos/westbound-logo.png';
import lockup from './assets/logos/westbound-lockup.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Support Local Businesses</h1>
        <p>Either add a new business for others to support, or start supporting a business. People can buy gift cards, donate via Venmo, pledge amounts, or log recent online support.</p>
        </header>
        <div class="button-wrapper">
          <Button class={'primary block'} text={'Add a Business'} url={'#'}/>
          <Button class={'secondary block'} text={'Support a Business'} url={'#'}/>
        </div>
    </div>
  );
}

export default App;
