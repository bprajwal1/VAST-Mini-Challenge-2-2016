import React from 'react';
import _ from 'underscore';

class Chart extends React.Component {
  componentDidMount() {
    this.props.onLoad();
    if (!_.isEmpty(this.props.data)) {
      this.props.loadChart(this.props.id, this.props.data);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (!_.isEmpty(nextProps) && !_.isEqual(this.props, nextProps)) {
      this.props.loadChart(nextProps.id, nextProps.data);
    }
  }
  render() {
    return (
      <div className="col-md-12">
        <div className="panel panel-default">
          <div className="panel-body">
            <svg id={this.props.id} width="1100" height="600" />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Chart;
