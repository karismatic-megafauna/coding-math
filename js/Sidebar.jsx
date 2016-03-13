import React, { Component, PropTypes } from 'react';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { activeComponent: props.activeComponent };
  }

  getComp(comp) {
    debugger;
    return (
      <div 
        onClick={this.props.onClick.bind(null, comp)}
        className={(this.props.activeComponent === this.props.comp) ? 'Active' : 'not'}
      >
        {comp}
      </div>
    );
  }
  render() {
    return (
      <div id="sidebar" >
        {Object.keys(this.props.components).map((component) => this.getComp(component))}
      </div>
    );
  }
}

Sidebar.propTypes = {
  onClick: PropTypes.func,
  components: PropTypes.object,
  activeComponent: PropTypes.string,
};

Sidebar.defaultProps = {
  activeComponent: 'Random Lines',
};
