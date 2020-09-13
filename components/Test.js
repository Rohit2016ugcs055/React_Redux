import React ,{Component, cloneElement} from 'react';
import Person from './Persons/Person/Person.js';
import logo from '../logo.svg';
import '../containers/App.css';
import './Persons/Person/Person.css';
class  Work extends Component{
  

    constructor(props){
        super(props);
        this.state={
            persons:[
                {id:11,name:"Rohit",age:23},
                {id:21,name:"Roshan",age:21},
                {id:31,name:"Rahul",age:44},
            ],
            data:[],
            Newdata:[],
            visible:false,
        };
    }




componentDidMount(){
    fetch("https://www.mohfw.gov.in/data/datanew.json")
    .then(res=>res.json())
    .then(res=>{
        this.state.data=res;
        this.state.Newdata=res;
    })
}


switchName=(event)=>{
    this.setState({
        persons:[
            {id:11,name:event,age:23},
            {id:21,name:"Roshan",age:21},
            {id:31,name:"Sohan",age:20},
        ]
    })
}


toggle=()=>{
    const show=this.state.visible;
    this.setState({visible:!show});
}

change=(event,id)=>{
    const per=this.state.persons.findIndex((props)=>{
       return props.id==id;
    })
    const newperson=[...this.state.persons];
    newperson[per].name=event.target.value;
    this.setState({
        persons:newperson
    })
}
 

del=(indx)=>{
    const pers=[...this.state.persons];
    pers.splice(indx,1);
    this.setState({
        persons:pers
    })
}




search=(event)=>{
    this.setState({
        data:this.state.Newdata
    });
    const record=this.state.Newdata;
    if(event.target.value==''){
       this.setState({
           data:this.state.Newdata
       });
    }
    else{
        const clone=record.filter((props)=>{
            const str=props.state_name.toString();
            return str.includes(event.target.value);
        });
        this.setState({
            data:clone
        });
    }
}


  render()
  {

    
   const per=this.state.data.map((props)=>{
       const p={...props};
       return p;
   })
   
    let person=null;
    if(this.state.visible){
        person=(
            <div>
               {
                   this.state.persons.map((props,indx)=>{
                       return(
                           <Person name={props.name}
                            age={props.age}
                            switch={this.switchName.bind(this,"ALOK")}
                            click={this.del.bind(this,indx)}
                            key={props.id}
                            change={(event)=>this.change(event,props.id)}>BUSY LIFE</Person>
                       );
                   })
               }

            </div>
        )
    }

    



     return(
     
     <div className="App">
      <h1 className="E">Corona Tracker</h1>
      <input onChange={this.search} type="text" placeholder="Input Search"></input>
      <div >
        
      <table  width="100%" >
          <thead className="c">
             <tr>
                 <th>State</th>
                 <th>Active</th>
                 <th>Recovered</th>
                 <th>Death</th>
             </tr>
          </thead>
          <tbody>
              {
                  this.state.data.map((props)=>{
                     return(
                         <tr>
                             <td className="D">{props.state_name}</td>
                             <td className="E">{props.active}</td>
                             <td className="F">{props.cured}</td>
                             <td className="G">{props.death}</td>
                         </tr>
                     );
                  })
              }
          </tbody>
      </table>


      </div>
     
     </div>
     

     );

}
}
export default Work;