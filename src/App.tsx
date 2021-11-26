import React from 'react';
import './App.css';

import Menu from '../src/components/Menu';

import Home from './pages/Home';
import CardsPage from './pages/CardsPage';
import ChartPage from './pages/ChartPage';
import NotFound from './pages/NotFound';

import history from './History';
import { Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
      <Router history={history}>
        <>
          <Menu />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/cardspage">
              <CardsPage />
            </Route>
            
            <Route path="/chartpage">
              <ChartPage />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </>
      </Router>
  );
}

export default App;
