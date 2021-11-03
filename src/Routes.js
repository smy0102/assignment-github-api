import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Nav from './Components/Common/Nav';
import Main from './Pages/Main';
import Search from './Pages/Search';
import Issue from './Pages/Issue';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/issue/:dataName" exact component={Issue} />
        <Route path="/search" exact component={Search} />
        <Redirect path="/*" component={Main} />
      </Switch>
    </Router>
  );
};

export default Routes;
