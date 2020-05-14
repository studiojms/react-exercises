import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import UsingState from './UsingState';
import Template from './Template';
import TodoListState from './TodoListState';

function App() {
  return (
    <Router>
      <Template>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/state" exact component={UsingState} />
          <Route path="/todo" exact component={TodoListState} />
        </Switch>
      </Template>
    </Router>
  );
}

export default App;
