import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Board } from './Board.jsx';
import { Sidebar } from './Sidebar.jsx';
import components from './components.js';
import styles from '../css/App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// // Can go away when react 1.0 release
// // Check this repo:
// // https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const mountPoint = document.getElementById('root');

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: props.activeComponent,
    };
  }
  handleClick(comp) {
    this.setState({ activeComponent: comp });
  }
  render() {
    return (
      <div className={styles.app} >
        <Sidebar
          componentList={this.props.componentList}
          onClick={this.handleClick.bind(this)}
          activeComponent={this.state.activeComponent}
        />
        <Board
          activeComponent={this.state.activeComponent}
          componentList={this.props.componentList}
        />
      </div>
    );
  }
}

App.propTypes = {
  activeComponent: PropTypes.string,
  componentList: PropTypes.object.isRequired,
};

render(
  <App
    activeComponent="Random Lines"
    componentList={components}
  />, mountPoint
);
