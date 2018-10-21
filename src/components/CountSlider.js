import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';


export default class CountSlider extends React.Component {
  state = {
    inputValue: this.props.value,
  }

  onChange = (value) => {
    // type check to make sure value is a number
    const cleanValue = Number(value) ? value : this.state.inputValue;

    this.setState({
      inputValue: cleanValue,
    });

    // callback, change the state of parent component <DataViewContainer>, pass minCount as prop to sibling component <ShotChart>
    this.props.onChange(cleanValue);
  }

  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={12} offset={4}>
          <Slider
            min={2}
            max={20}
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={2}
            max={20}
            style={{ marginLeft: 16 }}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}