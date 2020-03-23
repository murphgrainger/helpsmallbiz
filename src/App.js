import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from './pages/Home';
import AddBusiness from './pages/AddBusiness';
import Support from './pages/Support';
import FourOhFour from './pages/FourOhFour';


import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <main>
      <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/add-a-business' component={AddBusiness} />
      <Route path='/support-a-business' component={Support} />
      <Route component={FourOhFour}/>
      </Switch>
    </main>
    </div>
  );
}

export default App;
