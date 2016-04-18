import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
let frameId = 0;

export default class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      angle: 0,
      context: null,
    };
  }

  componentDidMount() {
    this.setState({ context: findDOMNode(this.refs.canvas).getContext('2d') });
    this.loop();
  }

  componentWillUnmount() {
    cancelAnimationFrame(frameId);
  }

  loop() {
    this.setState({ angle: this.state.angle + this.props.speed });
    frameId = requestAnimationFrame(this.loop.bind(this));
  }


  render() {
    const { base } = this.props;
    const { angle, context } = this.state;
    const height = window.innerHeight;
    const width = window.innerWidth;
    const offset = 50;
    const centerY = height * 0.5;
    const centerX = width * 0.5;
    const radius = base + Math.sin(angle) * offset;

    if (context) {
      context.clearRect(0, 0, width, height);
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
      context.fill();
    }

    return (
      <canvas ref="canvas" width={width} height={height} />
    );
  }
}

Animation.propTypes = {
  base: PropTypes.number,
  speed: PropTypes.number,
};
