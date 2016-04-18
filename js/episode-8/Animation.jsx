port React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
let frameId = 0;

export default class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      particles: [],
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
    const { particles } = this.state;

    for (let i = 0; i < 100; i++) {
      particles.push(
        particle.create(
          width / 2,
          height / 2,
          1,
          Math.random() * Math.PI * 2
        )
      );
    }

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
