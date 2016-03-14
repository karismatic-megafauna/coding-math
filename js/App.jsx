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
  // how do i cause a re-render? setState?
  // this.Main();
};

// is this harder as a pure component? is there anything i could use from having
// access to the lifecycle methods?
// How do I cause a re-render in this main function...
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
