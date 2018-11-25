import React, { Component } from 'react';
import Trianglify from 'trianglify';

export default class Background extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.debounceResize.bind(this));
    this.renderCanvas();
  }

  debounceResize() {
    clearTimeout(this.resize_timer);
    this.resize_timer = setTimeout(this.handleResize.bind(this), 500);
  }

  handleResize(e) {
    this.renderCanvas();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debounceResize.bind(this));
  }

  renderCanvas = () => {
    Trianglify({
      width: this.canvas.offsetWidth,
      height: this.canvas.offsetHeight,
      cell_size: 180,
      x_colors: ['#fff', '#e8ecf1', '#67809f']
    }).canvas(this.canvas);
  };

  render() {
    return (
      <canvas
        ref={c => (this.canvas = c)}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
    );
  }
}
