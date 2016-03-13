import React from 'react';
import { render } from 'react-dom';
import { Board } from './Board.jsx';
import { Sidebar } from './Sidebar.jsx';
import components from './components.js';
// import style from './style.css';

const mountPoint = document.getElementById('root');
// render(<Board />, document.getElementById('root'));

let activeComponent = 'Ship';

const handleClick = (comp) => {
  // do something in here to change the component
  // can't access setState from here...
  activeComponent = comp;
  console.log(`You clicked:  ${comp}`);
  debugger;
};

// TODO: turn Main into Sidebar
function Main(props) {
  return (
    <div>
      <Sidebar
        components={props.components}
        onClick={handleClick.bind(this)}
        activeComponent={activeComponent}
      />
      <Board />
    </div>
  );
}

render(
  <Main components={components} />, mountPoint
);
