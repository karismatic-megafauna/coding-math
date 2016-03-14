import React, { Component, PropTypes } from 'react';
import styles from '../css/Sidebar.css';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  getComp(comp) {
    return (
      <div
        onClick={this.props.onClick.bind(null, comp)}
        className={(this.props.activeComponent === comp) ? styles.active : ''}
      >
        {comp}
      </div>
    );
  }
  render() {
    return (
      <div id="sidebar" className={styles.sidebar} >
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
