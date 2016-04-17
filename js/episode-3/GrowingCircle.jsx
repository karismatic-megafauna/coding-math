import React, { Component, PropTypes } from 'react';
import { lerp } from '../utils.js'
import Slider from 'material-ui/lib/slider';
import styles from '../../css/Controls.css';
import Animation from './Animation.jsx';

export class GrowingCircle extends Component {
  constructor() {
    super();
    this.state = {
      base: 100,
      speed: 0.011,
    };
  }

  render() {
    return (
      <div>
        <div className={styles.controls} >
          <Slider
            defaultValue={0.5}
            onChange={(e, value) => this.setState({ base: lerp(value, 50, 300 )}) }
          />
          <Slider
            defaultValue={0.5}
            onChange={(e, value) => this.setState({ speed: lerp(value, 0.01, .1)}) }
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
