import React, { Component, PropTypes } from 'react';

// convert to pure function
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
  activeComponent: PropTypes.node,
  componentList: PropTypes.object,
};
