import React, { Component, PropTypes } from 'react';
import Slider from 'material-ui/lib/slider';
import styles from '../css/Controls.css';

export class Controls extends Component {
  constructor() {
    super();
  }
  render() {
    // onChange this needs to set the state and trigger a re-render of the board
    // props need to give this slider instruction
    return (
      <div className={styles.controls} >
        <Slider defaultValue={0.5}/>
        <Slider defaultValue={0.5}/>
        <Slider defaultValue={0.5}/>
      </div>
    );
  }
}
