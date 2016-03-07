import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'material-ui/lib/slider';

export class Hello extends React.Component {
  render() {
    return (
      <div>
        <Slider/>
        <Slider defaultValue={0.5}/>
        <Slider defaultValue={1}/>
      </div>
    );
  }
}

ReactDOM.render(<Hello/>, document.getElementById('controls'));
