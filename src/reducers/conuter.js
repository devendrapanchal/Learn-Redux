const initialState = 4;
const conuterReducer = (state = initialState, action) =>{
    switch ( action.type){
        case 'INCREMENT' :
            return state + action.payload
        case 'DECREMENT' : 
            return state - 1
        default : 
            return state
    }
}

export default conuterReducer;