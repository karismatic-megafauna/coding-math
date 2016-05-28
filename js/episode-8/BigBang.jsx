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
            onChange={(e, value) => this.setState({ speed: lerp(value, 1, 10)}) }
          />
        </div>
        <Animation
          num={this.state.num}
          speed={this.state.speed}
        />
      </div>
    );
  }
}
