import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Info from './components/Info';
import Login from './components/Login';
import FormRegister from './components/FormRegister';
import Car from './components/Car';
import Card from './components/Card';


function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path='/' component= { Login }/>  
        <Route path='/info' component= { Info }/>
        <Route path='/register' component= { FormRegister }/>
        <Route path='/auto' component= { Car }/>
        <Route path='/pay' component= { Card }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;