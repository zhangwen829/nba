import React from 'react';
import { Radio } from 'antd';
import ShotChart from './ShotChart';
import CountSlider from './CountSlider'

const RadioGroup = Radio.Group;

export default class DataViewContainer extends React.Component {
  state = {
    chartType: 'hexbin'
  }

  onChartTypeChange = (e) => {
    this.setState({
      chartType: e.target.value
    })
  }

  render() {
    const { chartType } = this.state;
    return (
      <div className="data-view">
        <ShotChart
          playerId={this.props.playerId}
          minCount={2}
          displayToolTips={true}
          chartType={'hexbin'}
        />
        <CountSlider />
        <RadioGroup onChange={this.onChartTypeChange} value={chartType}>
          <Radio value={"hexbin"}>Hexbin</Radio>
          <Radio value={"scatter"}>Scatter</Radio>
        </RadioGroup>
      </div>
    )
  }
}