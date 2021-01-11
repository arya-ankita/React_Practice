import React, { useState } from 'react';
import './index.css';

const App = ()=>{
    let Time = new Date().toLocaleTimeString();
     const [cTime, setCtime] = useState(Time);
    const updateTime = () =>{
        Time = new Date().toLocaleTimeString();
        setCtime(Time);
    }


    setInterval(updateTime,1000);

    return(
    <>
       <h1>{Time}</h1>
       {/* <button onClick={updateTime}>Click Me</button> */}
    </>
    )
}

export default App;