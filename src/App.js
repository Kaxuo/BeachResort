import React from 'react';
import './App.css';
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'



// switch = When no match found , we will render the error page
function App() {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        {/* for single room, we will display differents rooms depending on what we want to render ( dynamic rendering), so we need to use parameters, that's why we use ":slug" */}
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component = {Error} />
      </Switch>
    </>
  );
}

export default App;
