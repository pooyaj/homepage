import React, { Component } from 'react';
import Trianglify from 'trianglify';

export default class Background extends Component {
  static defaultProps = { colors: ['#ccc', '#eee', '#bbb'] };

  componentDidMount() {
    window.addEventListener('resize', this.debounceResize.bind(this));

    this.renderCanvas();
  }

  debounceResize = () => {
    clearTimeout(this.resize_timer);
    this.resize_timer = setTimeout(this.renderCanvas.bind(this), 500);
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.debounceResize.bind(this));
  }

  renderCanvas = () => {
    Trianglify({
      width: this.canvas.offsetWidth,
      height: this.canvas.offsetHeight,
      cellSize: 180,
      xColors: this.props.colors,
    }).toCanvas(this.canvas);
  };

  render() {
    return (
      <canvas
        ref={(c) => (this.canvas = c)}
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
        }}
      />
    );
  }
}
