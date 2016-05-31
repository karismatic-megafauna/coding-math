import React, { Component } from 'react';
import Animation from './Animation.jsx';

export class Volcano extends Component {
  constructor() {
    super();
    this.state = {
      num: 100,
    };
  }
  render() {
    return (
      <div>
        <Animation num={this.state.num} />
      </div>
    );
  }
}

