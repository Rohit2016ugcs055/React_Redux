import React ,{Component, cloneElement} from 'react';
import logo from '../logo.svg';
import '../containers/App.css';
class  Tracker extends Component{
  constructor(props){
    super(props);
     this.state={
       record:[],
       newrecord:[],
       inputValue:'',
     };
     this.onSort = this.onSort.bind(this)
  }





  componentDidMount(){
    fetch("https://www.mohfw.gov.in/data/datanew.json")
    .then(res=>res.json())
    .then(res=>{ 
        this.setState({
          record:res,
          newrecord:res,
          
        })
    })
  }

  
  onSort(event, sortKey){
    const data = this.state.record;
    data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
    this.setState({data})
  }






  handleSearch = e => {
    this.setState({ record: this.state.newrecord });
    const recordClone = this.state.newrecord;
    this.setState({ inputValue: e.target.value });
    if (e.target.value === '') {
      this.setState({ record: this.state.newrecord });
    } else {
        const temp = recordClone.filter(function (record) {
      const string = record.state_name.toString();
      return string.includes(e.target.value);
      });
      this.setState({ record: temp });
    }
    };

 


  


     


  render()
  {
    var newdata = this.state.record;
    console.log(this.state.record);
    
     return(
     
     
     
      

      <div>

        <h1 className="App">Corona Tracker</h1>
        <input
          className="personclass" 
          placeholder="Input search"
          onChange={this.handleSearch}
        />
        <div className="A">
         <table width="100%" className="c">
           <thead>
           <tr>
             <th>State</th>
             <th onClick={e=>this.onSort(e,'active')}>Active</th>
             <th>Recovered</th>
             <th>Dead</th>
           </tr>
           </thead>
           <tbody>
           {
             this.state.record.map(row=>{
               return(
                <tr>
                   <td>{row.state_name}</td>
                   <td>{row.active}</td>
                   <td>{row.cured}</td>
                   <td>{row.death}</td>
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
export default Tracker;