import React from 'react';
import { render } from 'react-dom';
import { Board } from './Board.jsx';
// import style from './style.css';

const mountPoint = document.getElementById('root');
// The board should take a componentName
// render(<Board />, document.getElementById('root'));

var handleClick = function(i, props) {
  console.log('You clicked: ' + props.items[i]);
}

// TODO: switch out GroceryList with actual app
// have a handleClick passed down that switches the
// component based on the component list
function GroceryList(props) {
  return (
    <div>
      {props.items.map(function(item, i) {
        return (
          <div onClick={handleClick.bind(this, i, props)} key={i}>
            {item}
            <Board component="yargggh" />
          </div>
        );
      })}
    </div>
  );
}

render(
  <GroceryList items={['Apple', 'Banana', 'Cranberry']} />, mountPoint
);
