// var REACT  = require('react');
// var REACTDOM  = require('react-dom');

// REACTDOM.render('kya dikhana hai', 'kaha dikhana hai', 'callback function');

// import React from "react";
// import ReactDOM from "react-dom";
// ReactDom.render(<h1>"Hello World"</h1>, document.getElementById("root"));
// how to give multiple jsx in render, there are two ways 1. using div tag, 2. using array.

// ReactDom.render(
//   <div>
//   <h1>"Hello I am Ankita Arya"</h1>
//   <p>THis day is amazing</p>
//   <p>You should thank god for this</p>
//   </div>,
//   document.getElementById("root")
// );

/* this same thing we can also do in this way


ReactDom.render(
  [
  <h1>"Hello I am Ankita Arya"</h1>
  <p>THis day is amazing</p>
  <p>You should thank god for this</p>
  ],
  document.getElementById("root")
);
*/

// Fragment use to put multiple tags 
// ReactDom.render(
//   <React.Fragment>
//   <h1>"Hello I am Ankita Arya 1"</h1>
//   <p>THis day is amazing</p>
//   <p>You should thank god for this</p>
//   </React.Fragment>,
//   document.getElementById("root")
// );


import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const name = "Ankita";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
const img1 ="https://picsum.photos/200/300/";
const img2 = "https://picsum.photos/250/301/";

const heading={

  color: 'blue',
  textAlign: 'center',
  textTransform:'capitalize',
  fontWeight: 'bold',
  fontFamily: '"Roboto", sans-serif',
};

ReactDOM.render(
  <>
    <h1  style={heading} className="heading" contentEditable="true">Hello, My name is {name}</h1>
    <p> Current Date is = {currDate}</p>
    <p> Current Time is = {currTime}</p>
    <div>
    <img src={img1} alt="RandomPic"/>
    <img src={img2} alt="rand2"/>
    </div>
  </>,
  document.getElementById("root")
);



