import React, { Component, PropTypes } from 'react';

export class RandomLines extends Component {
  componentDidMount() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    for (let i = 1; i < 100; i += 1) {
      context.beginPath();
      context.moveTo(Math.random() * width, Math.random() * height);
      context.lineTo(Math.random() * width, Math.random() * height);
      context.stroke();
    }
  }
  render() {
    return this.props.canvas;
  }
}

RandomLines.propTypes = {
  canvas: PropTypes.element,
};
