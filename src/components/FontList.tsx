import React from 'react';
import './FontList.css';
import { Select } from 'semantic-ui-react';

type FontListProps = {
  font: string,
  onChange: (font: string) => void,
};

class FontList extends React.Component<FontListProps> {
  render() {
    let options = fontList.sort().map((font) => ({ key: font, value: font, text: font }));
    return (
      <Select
        className="font-list"
        options={options}
        value={this.props.font}
        onChange={(_e, { value }) => this.props.onChange(String(value) || 'Nanum Gothic')}
        compact search
      />
    );
  }
}

const fontList = [
  'Roboto',
  'Noto Sans KR',
  'Nanum Gothic',
  'Nanum Myeongjo',
  'Nanum Pen Script',
  'Noto Serif KR',
  'Nanum Brush Script',
  'Black Han Sans',
  'Jua',
  'Dokdo',
  'Cute Font',
  'Stylish',
];

export default FontList;
