import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { firebase } from './firebase';
import './App.css';

import { UserContext } from './context/UserProvider';

import Login from './components/Login';
import AdminView from './components/Admin/AdminView';
import UserView from './components/User/UserView';

import Index from './components/Map/Index';
import UserLocation from './components/Map/UserLocation';
import NewWorker from './components/Admin/NewWorker';
import WorkersForm from './components/Admin/WorkersForm';
import Config from './components/Admin/Config';
import Home from './components/Map/Home';
import Profile from './components/User/Profile';

function App() {

  const { user } = useContext(UserContext);



  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route exact path='/dashboard'>
          {
            user.role === 'admin' && <AdminView />
          }
          {
            user.role === 'usuario' && <UserView />
          }
        </Route>
        <Route path='/dashboard/addWorker'>
          {
            user.role === 'admin' && <WorkersForm />
          }
        </Route>
        <Route exact path='/dashboard/config'>
          <Config />
        </Route>
        <Route path='/map'>
          <Home />
        </Route>
        <Route exact path='/dashbord/profile'>
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;