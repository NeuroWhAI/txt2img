import React from 'react';
import './InputText.css';
import { Input } from 'semantic-ui-react';

type InputTextProps = {
  type: string,
  text: string,
  onChange: (text: string) => void,
};

class InputText extends React.Component<InputTextProps> {
  render() {
    return (
      <Input
        type={this.props.type}
        className='input-text'
        value={this.props.text}
        onChange={(e) => this.props.onChange(e.target.value)}
      />
    );
  }
}

export default InputText;
