import React, { Component, PropTypes } from 'react';
import { Controls } from './Controls.jsx';
import styles from '../css/Board.css';

export class Board extends Component {
  render() {
    const Episode = this.props.componentList[this.props.activeComponent];
    return (
      <div id="board">
        <Episode />
      </div>
    );
  }
}

Board.propTypes = {
  activeComponent: PropTypes.element,
  componentList: PropTypes.array,
};
