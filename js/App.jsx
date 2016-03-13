import React from 'react';
import { render } from 'react-dom';
import { Board } from './Board.jsx';
import { Sidebar } from './Sidebar.jsx';
import components from './components.js';
// import style from './style.css';

const mountPoint = document.getElementById('root');
// The board should take a componentName
// render(<Board />, document.getElementById('root'));

var handleClick = function(comp, components) {
  console.log(`You clicked:  ${components[comp]}`);
};

// TODO: turn Main into Sidebar
function Main(props) {
  return (
    <div>
      <Sidebar
        components={props.components}
        onClick={handleClick.bind(this)}
      />
      <Board />
    </div>
  );
}

render(
  <Main components={components} />, mountPoint
);
