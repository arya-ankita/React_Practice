import React, { useState } from 'react';
import './index.css';

const App =() =>{
    const purple = "#8e44ad";
    const[bg,setBg]= useState(purple);
    const[name, newName] = useState("Click me");



    const bgchange=()=>{
        let newBg = "#34495e"; 
        setBg(newBg);
        newName("AAuuchhh!!!");
    }

    const bgBack=()=>{
        setBg(purple);
        newName("Ayyo 👼");
    }

    return(
       <>
        <div style={{backgroundColor: bg}}>
        <button onClick={bgchange} onDoubleClick={bgBack}>{name}</button>
        </div>
       
       </>
    );
}

export default App;