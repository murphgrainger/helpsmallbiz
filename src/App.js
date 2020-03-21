import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from './pages/Home';
import Support from './pages/Support';
import FourOhFour from './pages/FourOhFour';

function App() {
  return (
    <div className="App">
    <main>
      <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/support-a-business' component={Support} />
      <Route component={FourOhFour}/>
      </Switch>
    </main>
    </div>
  );
}

export default App;
