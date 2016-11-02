import React from 'react';
import { connect } from 'react-redux';
import Chart from './Chart';
import temperatureChart from '../charts/temperature';
import powerChart from '../charts/power';
import lowPowerChart from '../charts/lowPower';
import * as actions from '../actions/generalBuilding';
import GeneralBuildingDescription from './GeneralBuildingDescription';

const GeneralBuilding = ({
  temperature,
  power,
  lowPower,
  onTemperatureLoad,
  onPowerLoad,
  onLowPowerLoad,
  loadTemperatureChart,
  loadPowerChart,
  loadLowPowerChart,
}) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <h1>
          General building data
        </h1>
      </div>
      <Chart id="building-temperature" onLoad={onTemperatureLoad} data={temperature} loadChart={loadTemperatureChart} />
      <Chart id="building-power" onLoad={onPowerLoad} data={power} loadChart={loadPowerChart} />
      <Chart id="building-low-power" onLoad={onLowPowerLoad} data={lowPower} loadChart={loadLowPowerChart} />
      <GeneralBuildingDescription />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    temperature: state.generalBuilding.temperature,
    power: state.generalBuilding.power,
    lowPower: state.generalBuilding.lowPower,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTemperatureLoad: () => {
      dispatch(actions.fetchTemperatureData());
    },
    onPowerLoad: () => {
      dispatch(actions.fetchPowerData());
    },
    onLowPowerLoad: () => {
      dispatch(actions.fetchLowPowerData());
    },
    loadTemperatureChart: temperatureChart,
    loadPowerChart: powerChart,
    loadLowPowerChart: lowPowerChart,
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(GeneralBuilding);
