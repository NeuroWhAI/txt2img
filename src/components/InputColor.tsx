import React from 'react';
import './InputColor.css';

type InputColorProps = {
  color: string,
  onChange: (color: string) => void,
};

class InputColor extends React.Component<InputColorProps> {
  render() {
    return (
      <input
        type='color'
        className='input-color'
        value={this.props.color}
        onChange={(e) => this.props.onChange(e.target.value)}
      />
    );
  }
}

export default InputColor;

