import React ,{useReducer} from "react";

const countReducer =(state,action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return {count:state.count+1}
        case 'DECREMENT':
                return {count: state.count-1}
        case 'RESET':
            return{count: 0};
        default:
            break;
    }
}

function ReducerHooks(){
    const initialvalue={count:0};

    const [state,dispatch]=useReducer(countReducer,initialvalue)

    return(
        <>
            <h1>count: {state.count}</h1>
            <button onClick={()=> dispatch({ type:'INCREMENT'})}>+</button><br/>
            <button onClick={() => dispatch ({type:"DECREMENT"})}>-</button><br/>
            <button onClick ={()=>{dispatch({type :'RESET'})}}>reset</button>
        </>
    )

}
export default ReducerHooks