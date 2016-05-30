import React, { Component } from 'react';
import Animation from './Animation.jsx';
import styles from '../../css/Controls.css';
import Slider from 'material-ui/lib/slider';
import { lerp } from '../utils.js';

export class BigBang extends Component {
  constructor() {
    super();
    this.state = {
      num: 150,
      speed: 5,
      speedScalar: 1,
      gravity: 0,
      size: 5,
      sizeScalar: 1,
    };
  }
  render() {
    return (
      <div>
        <div className={styles.controls} >
          <div> Number </div>
          <Slider
            defaultValue={0.5}
            onChange={(e, value) => this.setState({ num: lerp(value, 1, 300)}) }
          />
          <div> Speed </div>
          <Slider
            defaultValue={0.5}
            onChange={(e, value) => this.setState({ speed: lerp(value, 2, 10)}) }
          />
          <div> Speed Variance </div>
          <Slider
            defaultValue={0.5}
            onChange={(e, value) => this.setState({ speedScalar: lerp(value, 0, 2)}) }
          />
          <div> Gravity </div>
          <Slider
            defaultValue={0}
            onChange={(e, value) => this.setState({ gravity: lerp(value, 0, 1)}) }
          />
          <div> Size </div>
          <Slider
            defaultValue={0.5}
            onChange={(e, value) => this.setState({ size: lerp(value, 1, 10)}) }
          />
          <div> Size Variance </div>
          <Slider
            defaultValue={0.5}
            onChange={(e, value) => this.setState({ sizeScalar: lerp(value, 0, 2)}) }
          />
        </div>
        <Animation
          num={this.state.num}
          speed={this.state.speed}
          speedScalar={this.state.speedScalar}
          gravity={this.state.gravity}
          size={this.state.size}
          sizeScalar={this.state.sizeScalar}
        />
      </div>
    );
  }
}
