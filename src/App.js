import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from './pages/Home';
import AddBusiness from './pages/AddBusiness';
import FourOhFour from './pages/FourOhFour';

function App() {
  return (
    <div className="App">
    <main>
      <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/add-business' component={AddBusiness} />
      <Route component={FourOhFour}/>
      </Switch>
    </main>

    </div>
  );
}

export default App;
