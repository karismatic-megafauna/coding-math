import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { particle } from '../particle';
import { removeDeadParticles } from '../utils';
let frameId = 0;

const times = (n, fn) => {
  const results = [];
  for (var i = 0; i < n; i++) {
    results.push(fn(i));
  }
  return results;
}

export default class Animation extends Component {
  constructor(props) {
    super(props);
    const num = props.num || 100;
    this.state = {
      particles: this.createParticles(num),
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

  createParticles(num) {
    const {innerWidth, innerHeight} = window;
    return times(num, i => particle.create(
      innerWidth / 2,
      innerHeight / 2,
      1,
      Math.random() * Math.PI * 2
    ));
  }

  loop() {
    // trigger a re-render
    this.setState({
      start: this.state.waveStep,
    });
    if ( this.state.particles.length) {
      frameId = requestAnimationFrame(this.loop.bind(this));
    }

  }

  render() {
    const { context } = this.state;
    const height = window.innerHeight;
    const width = window.innerWidth;
    const { particles } = this.state;


    if (context) {
      context.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update();
        context.beginPath();
        context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
        context.fill();
      }

      removeDeadParticles(particles, width, height);
      context.font = '24px serif';
      context.fillText(`particles on page: ${particles.length}`, 200, 50);
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
