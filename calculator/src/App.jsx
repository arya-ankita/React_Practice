import React from 'react';
import add, { divide, mul, substract } from './Calc';


function App(){
    <>
      <p>{add(40,4)}</p>
      <p>{substract(40,4)}</p>
      <p>{mul(40,4)}</p>
      <p>{divide(40,4)}</p>
    </>

};

export default App;