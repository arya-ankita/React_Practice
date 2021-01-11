import React from 'react';
import './index';


const SlotM =(props)=>{
   
    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    let {x,y,z} = props;
    if((x === y)&&(y ===z)){
        return(
          <>
            <div>
                <h1>{x}{y}{z}</h1>
                <h1>This is Matching</h1>
                <hr/>
            </div>
          </>
        )}
        else{
            return(
                <>
                  <div>
                      <h1>{x}{y}{z}</h1>
                      <h1>This is not  Matching</h1>
                      <hr/>
                  </div>
                </>
                ) 
           }
}




function App() {
    return (
        <>
            <h1 className="heading_style">🎰 Welcome to my slot Machine 🎰</h1>

            <div className="slotmachine">
                <SlotM x='😄' y='😄' z='😄' />
                <SlotM x='😄' y='😄' z='🍌' />
                <SlotM x='🍎' y='🍌' z='🍎'/>
            </div>
        </>
    );
}

export default App;