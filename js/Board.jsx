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
      component: props.componentName,
    };
  }
  componentDidMount() {
    const context = this.refs.canvas.getContext('2d');
    this.setState({ context: this.state.context });
    // maybe this is just a wrapper and each component implements it's
    // own update and setup methods?
    this.state.component.setUp();
    // requestAnimationFrame(() => {this.update()});
  }

  componentWillUnmount() {
    // delegate to children?
    // kill animation frame
    // remove listeners
    this.state.component.tearDown();
  }

  linkClick(e) {
    // clearSidebar();
    // e.target.className += ' current';

    // const prevComp = getComponent(currentComponentName);
    // this.state.component.tearDown();

    // Change component name
    // do I just pass it a new component name here?
    // currentComponentName = e.target.dataset.component;
    // render();
    // Do i need redux yet? is this enough pain?
    debugger;
  }

  render() {
    return (
      <div id="board">
        <div
          id="sidebar"
          onClick={this.linkClick}
        />
        <canvas
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
  componentName: PropTypes.string,
};

Board.defaultProps = {
  controls: { default: 'controls' },
  component: 'Random Lines',
};
