import React, { Component, PropTypes } from 'react';

export class randomLines extends Component {
  componentWillMount() {
    const canvas = document.getelementbyid('canvas');
    const context = canvas.getcontext('2d');
    const width = canvas.width = window.innerwidth;
    const height = canvas.height = window.innerHeight;

    for (let i = 1; i < 100; i += 1) {
      context.beginPath();
      context.moveTo(Math.random() * width, Math.random() * height);
      context.lineTo(Math.random() * width, Math.random() * height);
      context.stroke();
    }
  }
  componentWillUnmount() {
    console.log('component unmounted');
  }
  render() {
    return (
      <h1>Random lhshshshh sh hsshshhs hsh hshhsh shhshsh hshshhsh sh ines</h1>
    );
  }
}
