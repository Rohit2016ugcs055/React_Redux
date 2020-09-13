import React from 'react'
import classes from './Cockpit.css'
const tesla=(props)=>{


    let assignclasses=[];
    let btnClass='';
    if(props.visible){
        btnClass=classes.Red;
    }
    if(props.persons.length<=2){
        assignclasses.push(classes.red);
    }
    if(props.persons.length<=1){
        assignclasses.push(classes.bold);
    }


    return(
        <div className={classes.Cockpit}>
             <h1>Hi, In am react App</h1>
            <p className={assignclasses.join(' ')}>This is really working!</p>
             <button className={btnClass} onClick={props.toggle}>Toggle</button>
             <button className={btnClass} onClick={()=>props.switch("Rahul")}>Switch</button>
        </div>
    );
}

export default tesla;