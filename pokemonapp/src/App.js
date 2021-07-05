import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/layout/NavBar";

import './App.css';
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/body/Pokemon';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonId" component={Pokemon} />
            </Switch>
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
