import React from 'react';
import { connect } from 'react-redux';
import Chart from './Chart';
import * as actions from '../actions/proximity';
import proximityStaticChart from '../charts/proximityStatic';
import ProximityDescription from './ProximityDescription';

const ProximityStatic = ({ staticData, onStaticLoad, loadStaticChart }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="page-header">
          <h1>
            Proximity sensor data - static
          </h1>
        </div>
      </div>
      <Chart id="proximity-static" onLoad={onStaticLoad} data={staticData} loadChart={loadStaticChart} />
      <ProximityDescription />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    staticData: state.proximity.static,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onStaticLoad: () => {
      dispatch(actions.fetchStaticData());
    },
    loadStaticChart: proximityStaticChart,
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(ProximityStatic);
