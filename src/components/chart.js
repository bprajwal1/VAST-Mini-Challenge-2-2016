import React from 'react';

class Chart extends React.Component {
  componentDidMount() {
    this.props.onLoad();
  }
  componentWillReceiveProps(nextProps) {
    this.props.loadChart(nextProps.id, nextProps.data);
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
