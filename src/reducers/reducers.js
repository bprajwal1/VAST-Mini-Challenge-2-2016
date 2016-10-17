import { combineReducers } from 'redux';
import hazium from './hazium';
import generalBuilding from './generalBuilding';
import proximity from './proximity';

const ttApp = combineReducers({
  hazium,
  generalBuilding,
  proximity,
});

module.exports = ttApp;
