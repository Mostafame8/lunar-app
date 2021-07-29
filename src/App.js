import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '@fontsource/roboto';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './screens/Landing';
import Pricing from './screens/Pricing';
import Dashboard from './screens/Dashboard';
import './App.css';

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
