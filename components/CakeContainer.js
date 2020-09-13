import React from 'react'
import '../containers/App.css'
import {connect} from 'react-redux'
import buyCake from '../redux/cake/cakeActions.js'
function CakeContainer(props){
    return (
        <div className="App">
            <h2>Number of cakes-{props.numberOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}


const mapStateToProps=state=>{
    return{
        numberOfCakes:state.numberOfCakes
    }
}


const mapDispatchToProps=dispatch=>{
    return {
        buyCake:()=>dispatch(buyCake())
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
) (CakeContainer)