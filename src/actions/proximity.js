import { json } from 'd3.promise';

export function fetchStaticData() {
  return {
    type: 'FETCH_PROXIMITY_STATIC_DATA',
    payload: json('data/proximity_static.json'),
  };
}
