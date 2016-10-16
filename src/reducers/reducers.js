import { combineReducers } from 'redux';
import hazium from './hazium';
import generalBuilding from './generalBuilding';

const ttApp = combineReducers({
  hazium,
  generalBuilding,
});

module.exports = ttApp;
