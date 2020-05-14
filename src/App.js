import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import UsingState from './pages/UsingState';
import Template from './Template';
import TodoListState from './pages/TodoListState';
import TodoListMobx from './pages/mobx/TodoListMobx';

function App() {
  return (
    <Router>
      <Template>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/state" exact component={UsingState} />
          <Route path="/todo" exact component={TodoListState} />
          <Route path="/mobx" exact component={TodoListMobx} />
        </Switch>
      </Template>
    </Router>
  );
}

export default App;
