import * as ActionTypes from './actionTypes';

export const Breweries = (state = {
    selectedBrewery:{},
    breweries: [],
    loading: false
}, action) => {
switch (action.type) {
    case ActionTypes.ADD_BREWERIES:
        //this should add the fetched breweries into the store state when recieved from ASYNC API Call
        return  {...state, loading:false, breweries: [...state.breweries, action.payload],selectedBrewery:{}}

        //short call to return ACTION for ASYNC API call
    case ActionTypes.LOADING_BREWERIES:
        return {...state, loading:true,selectedBrewery:{}}

        //TO DO - Add API call here to remove beer info to the list of beers // admin only
    case ActionTypes.DELETE_BREWERIES:
        return { ...state};

    case ActionTypes.SELECT_BREWERY:
        console.log(action.payload)
        return {...state, loading:false, selectedBrewery: action.payload}

    default:
        return state;
}
}