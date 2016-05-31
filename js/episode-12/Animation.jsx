import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { particle } from '../particle';
import { removeDeadParticles } from '../utils';
let frameId = 0;

const getUpwardVelocity = (node) => Math.min(0, node.velocity.getY()) * -1;
const times = (n, fn) => {
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push(fn());
  }
  return results;
};

export default class Animation extends Component {
  static propTypes = {
    num: PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.state = {
      particles: this.createParticles(this.props.num, innerWidth / 2, innerHeight),
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
    return times(num, () => {
      const p = particle.create(
        x,
        y,
        Math.random() * 8 + 5,
        Math.random() * Math.PI * 2,
        -Math.PI / 2 + (Math.random() * 0.2 - 0.1),
        0.1,
        Math.random() * 10 + 2
      );
      p.color = {
        b: 0,
        r: 255,
        g: 0,
      };
      return p;
    });
  }

  updateParticle(p) {
    return p.update() || p;
  }

  recycle(p) {
    const { innerHeight, innerWidth } = window;

    if (p.position.getY() - p.radius > innerHeight) {
      p.position.setX(innerWidth / 2);
      p.position.setY(innerHeight);
      p.velocity.setLength(Math.random() * 8 + 5);
      p.velocity.setAngle(-Math.PI / 2 + (Math.random() * 0.2 - 0.1));
    }
  }

  loop() {
    const { particles } = this.state;
    const { innerHeight, innerWidth } = window;
    const updatedParticles = this.recycle(
      particles.map(this.updateParticle),
    );
    if (updatedParticles.length) {
      frameId = requestAnimationFrame(this.loop.bind(this));
    }
    this.setState({ particles: updatedParticles });
  }

  render() {
    const { ctx, particles } = this.state;
    const { innerHeight, innerWidth } = window;
    if (ctx) {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      particles.map(p => {
        ctx.beginPath();
        ctx.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
        const upwardVelocity = getUpwardVelocity(p) / 5;
        const red = Math.floor(255 * upwardVelocity);
        ctx.fillStyle = `rgb( ${red} , ${p.color.g} , ${p.color.b})`;
        ctx.fill();
      });
      ctx.font = '24px serif';
      ctx.fillText(`particles on page: ${particles.length}`, 200, 50);
    }
    return <canvas ref="canvas" width={innerWidth} height={innerHeight} />;
  }
}
