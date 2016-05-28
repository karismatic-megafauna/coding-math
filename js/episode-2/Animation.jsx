import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
let frameId = 0;

export default class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waveStep: Math.PI / 36,
      end: Math.PI * 2,
      start: 0,
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
    this.setState({
      end: this.state.end + this.state.waveStep,
      start: this.state.waveStep,
    });
    frameId = requestAnimationFrame(this.loop.bind(this));
  }


  render() {
    const { context } = this.state;
    const height = window.innerHeight;
    const width = window.innerWidth;
    const green = 0;
    const radius = this.props.radius;
    let start = this.state.start;
    const end = this.state.end;

    if (context) {
      context.clearRect(0, 0, width, height);
      context.save();

      context.translate(0, height / 2);
      context.scale(1, -1);

      const freq = end - start;
      const points = this.props.points;
      const stepNum = freq / points;
      const stepLength = (width / points);
      const amp = this.props.amp;
      const depthAmp = this.props.depthAmp;
      let y = 0;
      let x = 0;
      let yScaler = 0;
      for (start; start < end; start += stepNum) {
        x = x + stepLength;
        y = Math.sin(start) * amp;
        const z = Math.abs(Math.cos((start/2)));
        const r = radius * ( 1 + z * depthAmp );
        yScaler = Math.abs(y) / 600;
        const red = Math.floor(255 - (yScaler * 255));
        const blue = Math.floor(255 * yScaler);
        context.beginPath();
        context.arc(x, y, r, 0, Math.PI * 2, false);
        context.fillStyle = `rgb( ${red} , ${green} , ${blue})`;
        context.fill();
      }

      context.restore();
    }

    return (
      <canvas ref="canvas" width={width} height={height} />
    );
  }
}

Animation.propTypes = {
  amp: PropTypes.number,
  points: PropTypes.number,
};
