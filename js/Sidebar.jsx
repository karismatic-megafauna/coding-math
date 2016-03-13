import React, { Component, PropTypes } from 'react';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  getComp(comp) {
    return <div>{comp}</div>
  }
  render() {
    return (
      <div id="sidebar">
        {Object.keys(this.props.components).map((component) => this.getComp(component))}
      </div>
    );
  }
}

Sidebar.PropTypes = {
  onClick: PropTypes.func,
};
