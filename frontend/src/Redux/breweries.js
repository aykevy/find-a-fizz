import { CompareSharp } from '@material-ui/icons';
import { act } from 'react-dom/test-utils';
import * as ActionTypes from './actionTypes';

export const Breweries = (state = {
    selectedBrewery:{},
    breweries: [],
    loading: false
}, action) => {
switch (action.type) {
    case ActionTypes.ADD_BREWERIES:
        action.payload.sort((a,b) => {
            let fa = a.name.toLowerCase();
            let fb = b.name.toLowerCase();
            if (fa < fb){ return -1}
            if (fa > fb){ return 1};
            return 0;
        })   
        // let sorted = action.payload.filter((item) =>  { console.log(item); return item.id == 8163})
        
        //this should add the fetched breweries into the store state when recieved from ASYNC API Call
        return  {...state, loading:false, breweries: [...state.breweries, action.payload],selectedBrewery:{}}

        //short call to return ACTION for ASYNC API call
    case ActionTypes.LOADING_BREWERIES:
        return {...state, loading:true,selectedBrewery:{}}

        //TO DO - Add API call here to remove beer info to the list of beers // admin only
    case ActionTypes.DELETE_BREWERIES:
        return { ...state};

    case ActionTypes.SELECT_BREWERY:
        return {...state, loading:false, selectedBrewery: action.payload}

    default:
        return state;
}
}