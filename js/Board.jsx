import React, { Component, PropTypes } from 'react';
import { Controls } from './Controls.jsx';
import styles from '../css/Board.css';

export class Board extends Component {
  render() {
    const Component = this.props.componentList[this.props.activeComponent];
    return (
      <div id="board">
        <Component canvas={
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
  componentList: PropTypes.array,
};

