import React, { Component } from 'react';
import logo from '../logo.svg';
import '../containers/App.css';
import Person from './Person/Person.js';
class App extends Component {
 constructor(props){
   super(props);
   this.state={
      total_cases:0,
     recovered:0,
     dead:0,
   };
 }
 componentDidMount(){
  
  fetch("https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats")
       .then(res=>res.json())
       .then(result=>{
          this.setState({
            total_cases:result.data.total_cases,
            recovered:result.data.recovery_cases,
             dead:result.data.death_cases,
          })
       });


 }
 
  render() {
  
   
    return (
      <div className="App">
        <h1>Covid19 Tracker</h1>
        <div className="general">
          <div className="card">
            <label style={{color:"blue"}}>Total_Cases</label>
    <p style={{color:"blue"}}>{this.state.total_cases}</p>
          </div> 
          <div className="card">
            <label style={{color:"green"}}>Recovered</label>
            <p style={{color:"green"}}>{this.state.recovered}</p>
          </div>
          <div className="card">
            <label style={{color:"red"}}>Dead</label>
            <p style={{color:"red"}}>{this.state.dead}</p>
          </div>
        </div>
    
      </div> 
     
    );

    }
}

export default App;






