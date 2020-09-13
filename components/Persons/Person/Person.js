import React from 'react';
const person=(props)=>{
  console.log("[person.js]")
  return(
    <div className="personclass">
         <h1 onClick={props.remove}>My name is {props.name} And My age is {props.age}</h1>
         <p>{props.children}</p>
         <input type="text" onChange={props.change}></input>
    </div>
  );
}
export default person;