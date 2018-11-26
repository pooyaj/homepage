import React, { Component } from 'react';

export default class Background extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.debounceResize.bind(this));
    this.Trianglify = require('trianglify');

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
    this.Trianglify &&
      this.Trianglify({
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
          position: 'fixed',
          width: '100%',
          height: '100%'
        }}
      />
    );
  }
}
