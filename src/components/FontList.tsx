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
  'Noto Sans JP',
  'Nanum Gothic',
  'Nanum Myeongjo',
  'Nanum Pen Script',
  'Noto Serif KR',
  'Noto Serif JP',
  'Nanum Brush Script',
  'Black Han Sans',
  'Jua',
  'Dokdo',
  'Cute Font',
  'Stylish',
  'Reggae One',
  'Sawarabi Gothic',
  'Kosugi Maru',
  'Shippori Mincho',
  'Dela Gothic One',
  'Kiwi Maru',
  'DotGothic16',
  'Stick',
  'Train One',
  'Hachi Maru Pop',
  'Potta One',
  'Yusei Magic',
  'New Tegomin',
];

export default FontList;
