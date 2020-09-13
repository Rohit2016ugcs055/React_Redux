import React from 'react';
import './Person.css'
const person=(props)=>{
    return (
        <div className="personclass" >
            <h1 onClick={props.click}>My name is {props.name} My age is {props.age}</h1>
            <p>{props.children}</p>
            <input type="text" onChange={props.change}></input>
        </div>
    );
}
export default person;