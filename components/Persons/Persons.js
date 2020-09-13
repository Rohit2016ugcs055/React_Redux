import React from 'react'
import Person from './Person/Person.js';
const persons=(props)=>{
    console.log("[Persons.js]");
    return (
        props.persons.map((per,indx)=>{
            return(
                <Person
                name={per.name}
                age={per.age}
                remove={()=>props.deleted(indx)}
                change={(event)=>props.changed(event,per.id)}
                key={per.id}
                />
            );
        })
    );
}
export default persons;