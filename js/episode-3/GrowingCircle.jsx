import React, { Component, PropTypes } from 'react';
import Slider from 'material-ui/lib/slider';
import styles from '../../css/Controls.css';

export class GrowingCircle extends Component {
  constructor() {
    super();
    this.state = {
      base: 0,
      speed: 0.011,
    };
  }
  componentDidMount() {
    // do this to cause componentDidUpdate to fire
    this.setState({ base: 100 });
  }

  componentDidUpdate() {
    console.log('component updated');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const centerY = height * 0.5;
    const centerX = width * 0.5;
    const base = this.state.base;
    const offset = 50;
    const speed = this.state.speed;
    let angle = 0;

    function update() {
      const radius = base + Math.sin(angle) * offset;

      context.clearRect(0, 0, width, height);
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
      context.fill();

      angle += speed;
      requestAnimationFrame(update);
    }

    update();
  }

  render() {
    return (
      <div>
        {this.props.canvas}
        <div className={styles.controls} >
          <Slider
            defaultValue={0.5}
            onDragStop={() => {
              debugger;
              this.setState({ base: 200 });
            }}
          />
          <Slider
            defaultValue={0.5}
            onDragStop={() => {console.log('onDragEnd')}}
          />
        </div>
      </div>
    );
  }
}

GrowingCircle.propTypes = {
  canvas: PropTypes.element,
};
