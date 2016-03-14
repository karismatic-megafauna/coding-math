import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Board } from './Board.jsx';
import { Sidebar } from './Sidebar.jsx';
import components from './components.js';
import styles from '../css/App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: props.activeComponent,
    };
    this.beenClicked = [];
  }
  handleClick(comp) {
    this.setState({ activeComponent: comp });
    console.log(`You clicked:  ${comp}`);
  }
  render() {
    return (
      <div>
        <Sidebar
          components={this.props.components}
          onClick={this.handleClick.bind(this)}
          activeComponent={this.state.activeComponent}
        />
        <Board />
      </div>
    );
  }
}

App.propTypes = {
  activeComponent: PropTypes.string,
  components: PropTypes.object.isRequired,
};

App.defaultProps = {
  activeComponent: 'Ship',
};

const mountPoint = document.getElementById('root');
render(
  <App
    components={components}
  />, mountPoint
);
