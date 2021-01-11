import React, { useState } from 'react';
import './index.css';

const App = () =>{

    const[fullName, setFullName]= useState({
        fname:'',
        lname:'',
        email:'',
        phone:'',
    });
    

    const onsubmit=(event)=>{
        event.preventDefault();
        alert("form submitted");
        
    }


    const inputEvent=(event)=>{
        console.log("clicked");
        console.log(event.target.name);
        console.log(event.target.value);
        
        // const value = event.target.name;
        // const name = event.target.value;

         const{value, name} = event.target;
        setFullName((preValue) =>{
            if(name === "fname"){

                return {
                    ...preValue,
                    [name]: value
                }
                // return{
                //     fname: value,
                //     lname: preValue.lname,
                //     email: preValue.email,
                //     phone: preValue.phone,
                // }
            // }else if(name === "lname"){
            //     return{
            //         fname:preValue.fname,
            //         lname:value,
            //         email:preValue.email,
            //         phone:preValue.phone,
            //     }
            // }else if(name === "email"){
            //     return{
            //         fname:preValue.fname,
            //         lname:preValue.lname,
            //         email:value,
            //         phone:preValue.phone,
            //     }
            // }else if(name === "phone"){
            //     return{
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: value,
            //     }
             }
        })
    }

  return(
      <>
      <div>
          <h1>Hello {fullName.fname} {fullName.lname} </h1>
          <p>{fullName.lname}</p>
          <p>{fullName.email}</p>
          <p>{fullName.phone}</p>
          <input type= "text" placeholder="Enter your name" name="fname" onChange={inputEvent} value={fullName.fname}/>
          <input
            type="text"
            placeholder="Enter your Password"
            name="lname"
            onChange={inputEvent}
            value={fullName.lname}
          />
           
           <input
            type="text"
            placeholder="Enter your email"
            name="lname"
            onChange={inputEvent}
            value={fullName.email}
          />

          <input
            type="email"
            placeholder="Enter your phone"
            name="email"
            onChange={inputEvent}
            value={fullName.phone}
          />
            <br/>
          <button onClick={onsubmit}>Submit</button>
      </div>
      </>
   )
}

export default App;