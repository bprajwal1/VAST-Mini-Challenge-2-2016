import React from 'react';
import { connect } from 'react-redux';
import Chart from './chart';
import haziumChart from '../charts/hazium';
import * as haziumActions from '../actions/hazium';

const Hazium = ({ hazium, onLoad, loadChart }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="page-header">
          <h1>
            Hazium sensors data
          </h1>
        </div>
      </div>
      <Chart id="hazium" onLoad={onLoad} data={hazium} loadChart={loadChart} />
      <div className="col-md-12">
        <div className="well">
          Aqui va a ir la descripción del gráfico.
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    hazium: state.hazium,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      dispatch(haziumActions.fectchData());
    },
    loadChart: haziumChart,
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Hazium);
