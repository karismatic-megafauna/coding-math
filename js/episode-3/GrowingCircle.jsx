import React, { Component, PropTypes } from 'react';

export class GrowingCircle extends Component {
  componentDidMount() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const centerY = height * 0.5;
    const centerX = width * 0.5;
    const base = 100;
    const offset = 50;
    const speed = 0.011;
    let angle = 0;

    function update() {
      const radius = base + Math.sin(angle) * offset;

      context.clearRect(0, 0, width, height);
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
      context.fill();

      angle += speed;
      requestAnimationFrame(update);
    }

    update();
  }
  render() {
    return this.props.canvas;
  }
}

GrowingCircle.propTypes = {
  canvas: PropTypes.element,
};
