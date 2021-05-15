import React from 'react';
import WebFont from 'webfontloader';
import './App.css';
import FontList from './components/FontList';
import InputText from './components/InputText';
import TextCanvas from './components/TextCanvas';

type AppState = {
  text: string,
  canvasWidth: number,
  canvasHeight: number,
  fontSize: number,
  fontName: string,
};

class App extends React.Component<{}, AppState> {
  state: AppState = {
    text: 'Text',
    canvasWidth: 512,
    canvasHeight: 256,
    fontSize: 48,
    fontName: 'Nanum Gothic',
  };

  componentDidMount() {
    WebFont.load({
      google: {
        families: [this.state.fontName],
      },
    });
  }

  onTextChange(text: string) {
    this.setState({
      text,
    });
  }

  onWidthChange(canvasWidth: number) {
    if (canvasWidth < 0)
      canvasWidth = 8;
    this.setState({
      canvasWidth,
    });
  }

  onHeightChange(canvasHeight: number) {
    if (canvasHeight < 0)
      canvasHeight = 8;
    this.setState({
      canvasHeight,
    });
  }
  
  onFontChange(fontName: string) {
    WebFont.load({
      google: {
        families: [fontName]
      },
    });

    this.setState({
      fontName,
    });
  }

  onFontSizeChange(fontSize: number) {
    if (fontSize < 0)
      fontSize = 4;
    this.setState({
      fontSize,
    });
  }
  
  render() {
    const s = this.state;
    return (
      <div className="app-box">
        <h1>txt2img</h1>
        <div className="col2-box">
          <div className="named-input-box">
            Width :
            <InputText type="number" text={s.canvasWidth.toString()} onChange={(text) => this.onWidthChange(parseInt(text))} />
          </div>
          <div className="named-input-box">
            Height :
            <InputText type="number" text={s.canvasHeight.toString()} onChange={(text) => this.onHeightChange(parseInt(text))} />
          </div>
        </div>
        <div className="col2-box">
          <div className="named-input-box">
            Font :
            <FontList font={s.fontName} onChange={(font) => this.onFontChange(font)} />
          </div>
          <div className="named-input-box">
            Size :
            <InputText type="number" text={s.fontSize.toString()} onChange={(text) => this.onFontSizeChange(parseInt(text))} />
          </div>
        </div>
        <InputText type="text" text={s.text} onChange={(text) => this.onTextChange(text)} />
        <div className="canvas-box">
          <TextCanvas text={s.text} width={s.canvasWidth} height={s.canvasHeight} fontSize={s.fontSize} fontName={s.fontName} />
        </div>
      </div>
    );
  }
}

export default App;
