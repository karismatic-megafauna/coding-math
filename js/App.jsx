import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Board } from './Board.jsx';
import { Sidebar } from './Sidebar.jsx';
import components from './components.js';
// import styles from '../css/App.css';

const mountPoint = document.getElementById('root');

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: props.activeComponent,
    };
  }
  handleClick(comp) {
    debugger;
    this.setState({ activeComponent: comp });
    console.log(`You clicked:  ${comp}`);
  }
  render() {
    return (
      <div>
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

App.defaultProps = {
  activeComponent: 'Random Lines',
};

render(
  <App
    componentList={components}
  />, mountPoint
);
