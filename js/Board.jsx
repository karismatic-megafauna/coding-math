import React, { Component, PropTypes } from 'react';
import Controls from './Controls';

export class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      context: null,
      currentComponent: props.componentName,
    };
  }
  componentDidMount() {
    const context = this.refs.canvas.getContext('2d');
    this.setState({ context: context });
    // maybe this is just a wrapper and each component implements it's
    // own update and setup methods?
    this.setUp();
    // requestAnimationFrame(() => {this.update()});
  }

  componentWillUnmount() {
    // delegate to children?
    // kill animation frame
    // remove listeners
    this.tearDown();
  }

  linkClick(e) {
    clearSidebar();
    e.target.className += ' current';

    const prevComp = getComponent(currentComponentName);
    prevComp.tearDown();

    // Change component name
    // do I just pass it a new component name here?
    currentComponentName = e.target.dataset.component;
    render();
    // Do i need redux yet? is this enough pain?
  }

  render() {
    return (
      <div id="board">
        <div
          id="sidebar"
          onClick={linkClick}
        />
        <canvas
          ref="canvas"
          width={this.state.screen.width}
          height={this.state.screen.height}
        />
        <Controls controls={this.props.controls} />
      </div>
    );
  }
}

Board.propTypes = {
  setUp: PropTypes.func,
  tearDown: PropTypes.func,
  controls: PropTypes.object,
  componentName: PropTypes.string,
};

Board.defaultProps = {
  controls: { default: 'controls' },
  componentName: 'Random Lines',
};
