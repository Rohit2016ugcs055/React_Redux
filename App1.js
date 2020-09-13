import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';
import person from './Person/Person.js';
class App extends Component{
state={
  Persons:[
    {name:"Rohit", age:29},
    {name:"Roshan", age:32},
    {name:"Rahul", age:44},
  ],
  showlist:false
}
 
switchNameHandler=(newname)=>{
 this.setState({ Persons:[
  {name:newname, age:29},
  {name:"Roshan", age:32},
  {name:"Rahul", age:41},
]});
}

deletePersonHandler=(personIndex)=>{
  const persons=[...this.state.Persons];
  persons.splice(personIndex,1);
  this.setState({Persons:persons});
}

toggledata=()=>{
  const show=this.state.showlist;
  this.setState({showlist:!show});
}


namechange=(props)=>{
  this.setState({
    Persons:[
      {name:"Mahi",age:30},
      {name:props.target.value,age:43},
      {name:"Rahul",age:43},
    ]
  })
}

  render()
  {

   const style={
       backgroundColor:'red',
       font:'inherit',
       border:'1x solid blue',
       padding:'8px',
       cursor:'pointer',
   };

   let person=null;
   if(this.state.showlist){
     person=(
      <div>
       {this.state.Persons.map((person,indx)=>{
         return (<Person name={person.name}
          click={this.deletePersonHandler.bind(this,indx)}
         age={person.age}/>)
       })}
      </div>
     )
   }




     return(
      <div className="App">
        <h1>Hi, I am React App</h1>
        <p>This is really Working!</p>
        <button style={style} onClick={this.switchNameHandler.bind(this,"Maxwel!")}>Switch Name</button>
        
        <button style={style} onClick={this.toggledata}>Toggle</button>
        {person}
       

      </div>
     
     );
  }

}
export default App;