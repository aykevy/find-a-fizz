import * as ActionTypes from './actionTypes';

export const Beers = (state = {
    beers: [],
    loading: false
}, action) => {
switch (action.type) {
    case ActionTypes.ADD_BEERS:
        //this should add the fetched beers into the store state when recieved from ASYNC API Call
        return  {...state, loading:false, beers: [...state.beers, action.payload]}
        //short call to return ACTION for ASYNC API call
    case ActionTypes.LOADING_BEERS:
        return {...state, loading:true}
        //TO DO - Add API call here to remove beer info to the list of beers // admin only
    case ActionTypes.DELETE_BEERS:
        return { ...state};
    default:
        return state;
}
}