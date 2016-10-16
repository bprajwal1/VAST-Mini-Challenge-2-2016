import { csv } from 'd3.promise';

export function fectchData() {
  return {
    type: 'FETCH_HAZIUM_DATA',
    payload: csv('data/hazium.csv'),
  };
}
