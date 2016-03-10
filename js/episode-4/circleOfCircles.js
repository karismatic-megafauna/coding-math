import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'material-ui/lib/slider';

class ControlPanel extends React.Component {
  render() {
    return (
      <div>
        <Slider defaultValue={1}/>
        <Slider defaultValue={.5}/>
      </div>
    );
  }
}


export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }
  tick() {
    this.setState({count: this.state.count + 1});
		window.counterState = this.state.count + 1;
  }
  render() {
    return (
      <div onClick={this.tick.bind(this)}>
        Clicks: {this.state.count}
      </div>
    );
  }
}
Counter.propTypes = { initialCount: React.PropTypes.number };
Counter.defaultProps = { initialCount: 0 };

export const circleOfCircles = {
  tearDown() {
    // nothing to do yet
  },
  setUp() {

    ReactDOM.render(<Counter/>, document.getElementById('controls'));
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    const randNum = (Math.floor(Math.random() * 200) + 100);
    const circleArrangementRadius = window.counterState;
    const individualCircleRadii = window.counterState;
    const randNum2 = (Math.floor(Math.random() * 30) + 10);
		const cState = Counter.getState();
    const centerY = height / 2;
    const centerX = width / 2;
    const numObjects = 20;
    const slice = Math.PI * 2 / numObjects;
    let angle = 0;
    let x = 0;
    let y = 0;

    for (let i = 0; i < numObjects; i += 1) {
      angle = i * slice;
      x = centerX + Math.cos(angle) * circleArrangementRadius;
      y = centerY + Math.sin(angle) * circleArrangementRadius;
      context.beginPath();
      context.arc(x, y, individualCircleRadii, 0, Math.PI * 2, false);
      context.fill();
    }
  },
};
