import React, { Component, PropTypes } from 'react';
import { lerp } from '../utils.js';
import Slider from 'material-ui/lib/slider';
import styles from '../../css/Controls.css';
import Animation from './Animation.jsx';

export class PendulumWave extends Component {
  constructor() {
    super();
    this.state = {
      points: 100,
      amp: 400,
    };
  }
  render() {
    return (
      <div>
        <div className={styles.controls} >
          <div> Points </div>
          <Slider
            defaultValue={0.5}
            onChange={(e, value) => this.setState({ points: lerp(value, 4, 250)}) }
          />
          <div> Amplitude </div>
          <Slider
            defaultValue={0.5}
            onChange={(e, value) => this.setState({ amp: lerp(value, 25, 500)}) }
          />
        </div>
        <Animation
          points={this.state.points}
          amp={this.state.amp}
        />
      </div>
    );
  }
}
