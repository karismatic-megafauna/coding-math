import React, { Component, PropTypes } from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import styles from '../css/Sidebar.css';


export class Sidebar extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    componentList: PropTypes.object,
    activeComponent: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  getComp(comp, i) {
    return (
      <div
        key={i}
        onClick={this.props.onClick.bind(null, comp)}
        className={(this.props.activeComponent === comp) ? styles.active : ''}
      >
        {comp}
      </div>
    );
  }

  handleToggle = () => { this.setState({ open: !this.state.open }) };

  render() {
    return (
      <div>
        <RaisedButton label="Open Sidebar" onClick={this.handleToggle} />
        <LeftNav open={this.state.open}>
          <div id="sidebar" className={styles.sidebar} >
            {Object.keys(this.props.componentList).map((component, i) => this.getComp(component, i))}
            <span className={styles.close}>
              <FlatButton label="Close Sidebar" onClick={this.handleToggle} />
            </span>
          </div>
        </LeftNav>
      </div>
    );
  }
}
