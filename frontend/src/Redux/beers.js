import * as ActionTypes from './actionTypes';

export const Beers = (state = {
    selectedBeer:{},
    beers: [],
    loading: false
}, action) => {
switch (action.type) {
    case ActionTypes.ADD_BEERS:
        //this should add the fetched beers into the store state when recieved from ASYNC API Call
        return  {...state, loading:false, beers: [...state.beers, action.payload],selectedBeer:{}}
        //short call to return ACTION for ASYNC API call
    case ActionTypes.LOADING_BEERS:
        return {...state, loading:true,selectedBeer:{}}
        //TO DO - Add API call here to remove beer info to the list of beers // admin only
    case ActionTypes.DELETE_BEERS:
        return { ...state};
    case ActionTypes.SELECT_BEER:

        return {...state, loading:false, selectedBeer: action.payload}

    default:
        return state;
}
}