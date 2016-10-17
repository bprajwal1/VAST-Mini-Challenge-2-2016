import React from 'react';
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';
import Template from './Template';
import Home from './Home';
import Hazium from './Hazium';
import GeneralBuilding from './GeneralBuilding';
import ProximityStatic from './ProximityStatic';

module.exports = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Template}>
        <IndexRoute component={Home} />
        <Route path="/" component={Home} />
        <Route path="/hazium" component={Hazium} />
        <Route path="/building" component={GeneralBuilding} />
        <Route path="/proximity" component={ProximityStatic} />
      </Route>
    </Router>
  );
}
