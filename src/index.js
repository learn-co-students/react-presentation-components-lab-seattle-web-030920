import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

let gotClicked = ()=>{
  console.log('got clicked')
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={gotClicked} />
  </div>,
  document.getElementById('root')
);