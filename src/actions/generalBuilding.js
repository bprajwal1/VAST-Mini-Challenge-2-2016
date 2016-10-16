import { csv, json } from 'd3.promise';

export function fetchTemperatureData() {
  return {
    type: 'FETCH_GENERAL_TEMPERATURE_DATA',
    payload: json('data/temperature.json'),
  };
}

export function fetchPowerData() {
  return {
    type: 'FETCH_GENERAL_POWER_DATA',
    payload: json('data/power.json'),
  }
}

export function fetchLowPowerData() {
  return {
    type: 'FETCH_GENERAL_LOW_POWER_DATA',
    payload: json('data/low_power.json'),
  }
}
