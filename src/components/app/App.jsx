import React from 'react';
import { 
  BrowserRouter as Router,
  Switch, 
  Route } from 'react-router-dom';
import ListContainer from '../../containers/ListContainer';
import Detail from './Detail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/detail/:_id">
          <Detail/>
        </Route>
        <Route exact path="/">
          <ListContainer/>
        </Route>
      </Switch>
    </Router>
  );
}
