import React, { Component, PropTypes } from 'react';
import { Controls } from './Controls.jsx';
import styles from '../css/Board.css';
import { RandomLines } from './episode-1/RandomLines.jsx';
import { PendulumWave } from './episode-2/PendulumWave';

export class Board extends Component {

  render() {
    return (
      <div id="board">
        <RandomLines canvas={
          <canvas
            id="canvas"
            ref="canvas"
            className={styles.canvas}
            width={window.innerWidth}
            height={window.innerHeight}
          />
          }
        />
      </div>
    );
  }
}

Board.propTypes = {
  activeComponent: PropTypes.element,
};

