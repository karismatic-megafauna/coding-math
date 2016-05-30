import React, { Component } from 'react';
import { lerp } from '../utils.js';
import Slider from 'material-ui/lib/slider';
import styles from '../../css/Controls.css';
import Animation from './Animation.jsx';

export class GrowingCircle extends Component {
  constructor() {
    super();
    this.state = {
      base: 100,
      speed: 0.1,
    };
  }

  render() {
    return (
      <div>
        <div className={styles.controls} >
          <div> Size </div>
          <Slider
            defaultValue={0.5}
            onChange={(e, value) => this.setState({ base: lerp(value, 50, 300)}) }
          />
          <div> Size </div>
          <Slider
            defaultValue={0.5}
            onChange={(e, value) => this.setState({ base: lerp(value, 50, 300)}) }
          />
          <div> Speed </div>
          <Slider
            defaultValue={0.5}
            onChange={(e, value) => this.setState({ speed: lerp(value, 0.01, 0.5)}) }
          />
        </div>
        <Animation
          speed={this.state.speed}
          base={this.state.base}
        />
      </div>
    );
  }
}
