import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Template from './Template';
import Home from './Home';
import Hazium from './Hazium';
import Test from './Test';

module.exports = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Template}>
        <IndexRoute component={Home} />
        <Route path="/" component={Home} />
        <Route path="/hazium" component={Hazium} />
        <Route path="/test" component={Test} />
      </Route>
    </Router>
  );
}
