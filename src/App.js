import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import AddBusiness from './pages/AddBusiness';
import FourOhFour from './pages/FourOhFour';

function App() {
  return (
    <div className="App">
    <main>
      <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/add-a-challenge' component={AddBusiness} />
      <Route path='/four-oh-four' component={FourOhFour}/>
      <Redirect to="/four-oh-four" />
      </Switch>
    </main>
    </div>
  );
}

export default App;
