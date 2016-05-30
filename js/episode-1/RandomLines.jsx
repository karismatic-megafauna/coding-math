import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';


export class RandomLines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: null,
    };
  }
  componentDidMount() {
    this.setState({ context: findDOMNode(this.refs.canvas).getContext('2d') });
  }

  render() {
    const { context } = this.state;
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (context) {
      context.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
      for (let i = 1; i < 30; i += 1) {
        context.beginPath();
        context.moveTo(Math.random() * width, Math.random() * height);
        context.lineTo(Math.random() * width, Math.random() * height);
        context.stroke();
      }
    }

    return (
      <canvas ref="canvas" width={width} height={height} />
    );
  }
}

RandomLines.propTypes = {
  canvas: PropTypes.element,
};
