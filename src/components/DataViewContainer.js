import React from 'react';
import { Radio, Switch } from 'antd';
import ShotChart from './ShotChart';
import CountSlider from './CountSlider'

const RadioGroup = Radio.Group;

export default class DataViewContainer extends React.Component {
  state = {
    chartType: 'hexbin',
    displayToolTips: true
  }

  onChartTypeChange = (e) => {
    this.setState({
      chartType: e.target.value
    })
  }
  onToolTipsChange = (displayToolTips) => {
    // displayToolTips passed in is a boolean (true or false)
    this.setState({
      displayToolTips
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
        <Switch checkedChildren="on" unCheckedChildren="off" defaultChecked onChange={this.onToolTipsChange} />
      </div>
    )
  }
}