import React, { Component, PropTypes } from 'react';
import { particle } from '../particle';
import Animation from './Animation.jsx';

export class BigBang extends Component {
  constructor() {
    super();
    this.state = {
      amp: 400,
    };
  }
  render() {
    return (
      <div>
        <Animation />
      </div>
    );
  }
}
