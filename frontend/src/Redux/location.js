import * as ActionTypes from './actionTypes';

export const Location = (state = {
    latitude: '',
    longitude:''
},action) => {
    switch(action.type){
        case ActionTypes.ADD_LOCATION:
            return {...state, latitude:action.payload.latitude,longitude:action.payload.longitude}
        case ActionTypes.GET_LOCATION:
            return state    
        default:
            return state    
    }
}
