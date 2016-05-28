import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { particle } from '../particle';
import { removeDeadParticles } from '../utils';
let frameId = 0;

const times = (n, fn) => {
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push(fn(i));
  }
  return results;
};

export default class Animation extends Component {
  static propTypes = {
    num: PropTypes.number,
    speed: PropTypes.number,
  }

  constructor(props) {
    super(props);
    const { innerWidth, innerHeight } = window;
    this.state = {
      particles: this.createParticles(this.props.num, innerWidth / 2, innerHeight / 2),
      ctx: null,
    };
  }

  componentDidMount() {
    this.setState({ ctx: findDOMNode(this.refs.canvas).getContext('2d') });
    this.loop();
  }

  componentWillUnmount() {
    cancelAnimationFrame(frameId);
  }


  createParticles(num, x, y) {
    return times(num, () => particle.create(
      x,
      y,
      this.props.speed,
      Math.random() * Math.PI * 2
    ));
  }

  addMoreParticles(num, mouseX, mouseY) {
    const { particles } = this.state;
    const rect = findDOMNode(this.refs.canvas).getBoundingClientRect();
    const canvasX = mouseX - rect.left;
    const canvasY = mouseY - rect.top;

    if (particles.length === 0) {
      frameId = requestAnimationFrame(this.loop.bind(this));
    }
    this.setState({
      particles: particles.concat(this.createParticles(num, canvasX, canvasY)),
    });
  }

  updateParticle(p) {
    return p.update() || p;
  }

  loop() {
    // trigger a re-render
    const { particles } = this.state;
    const { innerHeight, innerWidth } = window;
    const updatedParticles = removeDeadParticles(
      particles.map(this.updateParticle),
      innerWidth,
      innerHeight
    );

    if (updatedParticles.length) {
      frameId = requestAnimationFrame(this.loop.bind(this));
    }

    this.setState({ particles: updatedParticles });
  }

  render() {
    const { ctx } = this.state;
    const height = window.innerHeight;
    const width = window.innerWidth;
    const { particles } = this.state;

    // Render updated particles on ctx
    if (ctx) {
      ctx.clearRect(0, 0, width, height);
      particles.map(p => {
        ctx.beginPath();
        ctx.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
        ctx.fill();
      });
      ctx.font = '24px serif';
      ctx.fillText(`particles on page: ${particles.length}`, 200, 50);
    }

    return (
      <canvas
        ref="canvas"
        onClick={(e) => {
          this.addMoreParticles(this.props.num, e.clientX, e.clientY);
        }}
        width={width}
        height={height}
      />
    );
  }
}
