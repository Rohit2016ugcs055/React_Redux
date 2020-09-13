import React ,{Component, cloneElement} from 'react';
import Person from './Persons/Person/Person.js';
import logo from '../logo.svg';
import '../containers/App.css';
import './Persons/Person/Person.css';
import Persons from '../components/Persons/Persons.js'
import Cockpit from './Cockpit/Cockpit.js'
class  Work extends Component{
 
    constructor(props){
        super(props);
        this.state={
            persons:[
                {id:"1", name:"Rohit",age:30},
                {id:"2",name: "Rahul",age:23},
                {id:"3",name: "Sourav",age:21},
            ],
            visible:false,
        };
    }


static getDerivedStateFromProps(props,state){
   console.log("[APP.JS] GETDERIVEDSTATEFROMPROPS",props);
   return state;
}


componentDidMount(){
    console.log("WORK");
}


switch=(props)=>{
    this.setState({
        persons:[
            {name:props,age:30},
            {name:"Vidut",age:23},
            {name:"Sourav",age:33},
        ]
    })
}

  
change=(event,id)=>{

     const  personind=this.state.persons.findIndex(per=>{
         return per.id==id
     })
   const person={
       ...this.state.persons[personind]
   }

   person.name=event.target.value;
   const per=[...this.state.persons]
   per[personind]=person
    this.setState({
       persons:per
    });
}

toggle=()=>{
    const show=this.state.visible;
    this.setState({
        visible:!show
    });
}
  
deleteName=(indx)=>{
    const person=[...this.state.persons];
    person.splice(indx,1);
    this.setState({
        persons:person,
    })
}
 

  render()
  {

   console.log("[APP.JS] RENDER");


    const style={
        backgroundColor:"green",
        font:"inherit",
        border:"1px solid blue",
        padding:"8px",
        color:"white"

    }




     let person=null;
    if(this.state.visible){
        person=(
            <div>
               {
                  <Persons
                  persons={this.state.persons}
                  changed={this.change}
                  deleted={this.deleteName}
                  />

               }
            </div>
        )
        style.backgroundColor="red";
    }

   


    // let classes=[];
    // if(this.state.persons.length<=2){
    //     classes.push('red');
    // }
    // if(this.state.persons.length<=1){
    //     classes.push('bold');
    // }

    
  
     return(
     
     
     <div className="App">

      <Cockpit
       visible={this.state.visible}
       persons={this.state.persons}
       toggle={this.toggle}
       switch={this.switch}

      />
      
       {/* <h1>Hi, In am react App</h1>
       <p className={classes.join(' ')}>This is really working!</p>
       <button style={style} onClick={this.toggle}>Toggle</button>
       <button style={style} onClick={this.switch.bind(this,"Rahul")}>Switch</button> */}
       {person}
     </div>
      

     );

}
}
export default Work;