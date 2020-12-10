import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';
import Login from './components/login';
import Profile  from './components/profile';
import Feed from './components/feed';

function App() {
  return (
    <>
    <HashRouter basename='/'>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/feed' component={Feed} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
