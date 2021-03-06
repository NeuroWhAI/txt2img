import React from 'react';
import './TextCanvas.css';
import { Button } from 'semantic-ui-react';
import { IsWebApp } from '../utils';

type TextCanvasProps = {
  text: string,
  width: number,
  height: number,
  fontSize: number,
  fontName: string,
  fgColor: string,
  bgColor: string,
}

class TextCanvas extends React.Component<TextCanvasProps> {
  canvasRef: React.RefObject<HTMLCanvasElement> = React.createRef();
  ctx: CanvasRenderingContext2D | null = null;
  
  drawText() {
    if (this.ctx === null) {
      return;
    }
    
    // Clear canvas.
    this.ctx.clearRect(0, 0, this.props.width, this.props.height);
    
    // Background.
    this.ctx.fillStyle = this.props.bgColor;
    this.ctx.fillRect(0, 0, this.props.width, this.props.height);

    // Text.
    this.ctx.textBaseline = 'middle';
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = this.props.fgColor;
    this.ctx.font = `${this.props.fontSize}px ${this.props.fontName}`;
    this.ctx.fillText(this.props.text, this.props.width / 2, this.props.height / 2);
  }
  
  downloadImage() {
    let url = this.canvasRef!.current!.toDataURL('image/png')
      .replace(/^data:image\/png/, 'data:application/octet-stream');

    let a = document.createElement('a');
    a.setAttribute('download', 'txt2img.png');
    a.setAttribute('href', url);
   
    if (IsWebApp()) {
      let img = document.createElement('img');
      img.setAttribute('src', url);

      let popup = window.open();
      popup?.document.write("<p>Close this popup after downloading.</p>");
      popup?.document.body.appendChild(a);
      a.appendChild(img);
    }

    a.click();
}
  
  componentDidMount() {
    this.ctx = this.canvasRef!.current!.getContext('2d');
    this.drawText();

    (document as any).fonts.onloadingdone = () => this.drawText();
  }
  
  componentDidUpdate() {
    this.drawText();
  }
  
  render() {
    return (
      <div>
        <canvas
          ref={this.canvasRef}
          className='text-canvas'
          width={this.props.width}
          height={this.props.height}
        >
        </canvas>
        <Button fluid onClick={() => this.downloadImage()}>Download</Button>
      </div>
    );
  }
}

export default TextCanvas;
