import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Nav from './components/Nav';
import Main from './pages/Main';
import Search from './pages/Search';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/search" exact component={Search} />
        <Redirect path="/*" component={Main} />
      </Switch>
    </Router>
  );
};

export default Routes;
