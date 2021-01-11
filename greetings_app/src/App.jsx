import React from 'react';

function App(){
    let currDate = new Date(2020, 5,5, 14);
    currDate = currDate.getHours();
    let greeting = '';
    const cssStyle = {};

    if(currDate>=1 && currDate<12){
          greeting="Good Morning";
          cssStyle.color = 'green';
    }else if(currDate>=12 && currDate<19){
          greeting="Good Afternoon";
          cssStyle.color = 'orange';
    }else{
          greeting="Good Night";
          cssStyle.color=''
    }

    return(<>
         <div>
            <h1>Hello Sir,<span style={cssStyle}>{greeting}</span></h1>
         </div>
    </>);
}

export default App;