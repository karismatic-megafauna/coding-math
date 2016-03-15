import React, { Component, PropTypes } from 'react';
import { Controls } from './Controls.jsx';

export class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      context: null,
    };
  }

  componentDidMount() {
    const context = this.refs.canvas.getContext('2d');
    this.setState({ context });
    this.props.componentList[this.props.activeComponent].setUp();
  }

  componentWillReceiveProps(nextProps) {
    this.props.componentList[this.props.activeComponent].tearDown();
    nextProps.componentList[nextProps.activeComponent].setUp();
  }

  render() {
    return (
      <div id="board">
        <canvas
          id="canvas"
          ref="canvas"
          width={this.state.screen.width}
          height={this.state.screen.height}
        />
        <Controls />
      </div>
    );
  }
}

Board.propTypes = {
  setUp: PropTypes.func,
  tearDown: PropTypes.func,
  controls: PropTypes.object,
  activeComponent: PropTypes.string,
  componentList: PropTypes.object.isRequired,
};

Board.defaultProps = {
  activeComponent: 'Random Lines',
};
