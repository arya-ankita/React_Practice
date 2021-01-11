import React, { useState } from 'react';
import './index.css';



const App = () =>{

    // let state = useState;
    // let count =0;
    const [count, setCount] = useState(0);
    
     const IncNum = ()=>{
            setCount(count+1);
    }
    return(
        <>
         <div>
          <h1> {count}</h1>
          <button onClick={IncNum}>Click Me</button>
          </div>
        </>
    )
}

export default App;