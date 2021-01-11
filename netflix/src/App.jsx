import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
import Netflix from './Netflix';
import Amazon from './Amazon';

const favSeries = "Netflix";


    


const App = ()=>(
 <>
    <h1 className="heading-style">List of top five photos</h1>
     {/* {Sdata.map((value)=>{
       return(
        <Card 
          key={value.id}
          imagesrc={value.imagesrc}
          title={value.title}
          sname={value.sname}
          link={value.link}
        />
      );
    })};  */}

         
    {(favSeries === "Netflix") ? <Netflix/>: <Amazon/>}

  </> 
);

export default App;
