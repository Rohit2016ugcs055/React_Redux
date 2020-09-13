import {BUY_CAKE} from './cakeType.js'

const insitalState={
    numberOfCakes:10
}

const cakeReducer=(state=insitalState,action)=>{
    switch(action.type){
      case BUY_CAKE:
          return {
              ...state,
              numberOfCakes:state.numberOfCakes-1
          }
        default:return state;
    }
}

export default cakeReducer;