import React from 'react';
import { Radio, Switch, Row, Col } from 'antd';
import ShotChart from './ShotChart';
import CountSlider from './CountSlider'

const RadioGroup = Radio.Group;

export default class DataViewContainer extends React.Component {
  state = {
    minCount:2,
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
    const { minCount,chartType, displayToolTips } = this.state;
    return (
      <div className="data-view">
        <ShotChart
          playerId={this.props.playerId}
          minCount={minCount}
          displayToolTips={displayToolTips}
          chartType={chartType}
        />
        <CountSlider />
        <Row>
          <Col span={8} offset={7}>
            <RadioGroup onChange={this.onChartTypeChange} value={chartType}>
              <Radio value={"hexbin"}>Hexbin</Radio>
              <Radio value={"scatter"}>Scatter</Radio>
            </RadioGroup>
          </Col>
          <Col span={2}>
            <Switch checkedChildren="on" unCheckedChildren="off" defaultChecked onChange={this.onToolTipsChange} />
          </Col>
        </Row>
      </div>
    )
  }
}