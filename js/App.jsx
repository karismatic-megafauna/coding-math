import React from 'react';
import { render } from 'react-dom';
import { Board } from './Board';
import style from './style.css';

const mountPoint = document.getElementById('root');
// The board should take a componentName
// render(<Board />, document.getElementById('root'));

var handleClick = function(i, props) {
  console.log('You clicked: ' + props.items[i]);
}

function GroceryList(props) {  
  return (
    <div>
      {props.items.map(function(item, i) {
        return (
          <div onClick={handleClick.bind(this, i, props)} key={i}>{item}</div>
        );
      })}
    </div>
  );
}

ReactDOM.render(
  <GroceryList items={['Apple', 'Banana', 'Cranberry']} />, mountPoint
);
