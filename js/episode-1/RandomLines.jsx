import React, { Component, PropTypes } from 'react';

export class RandomLines extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // const canvas = document.getElementById('canvas');
    // const context = canvas.getContext('2d');
    // const width = canvas.width = window.innerwidth;
    // const height = canvas.height = window.innerHeight;

    // for (let i = 1; i < 100; i += 1) {
    //   context.beginPath();
    //   context.moveTo(Math.random() * width, Math.random() * height);
    //   context.lineTo(Math.random() * width, Math.random() * height);
    //   context.stroke();
    // }
  }
  componentWillUnmount() {
    console.log('component unmounted');
  }
  render() {
    return this.props.canvas;
  }
}
