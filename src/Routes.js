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
import Issue from './pages/Issue';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Main} />
<<<<<<< HEAD
=======
        <Route path="/issue/:dataName" exact component={Issue} />
>>>>>>> 6c9b6ed (Add: 등록한 Repository Issue 모아보기 기능 구현 완료)
        <Route path="/search" exact component={Search} />
        <Redirect path="/*" component={Main} />
      </Switch>
    </Router>
  );
};

export default Routes;
