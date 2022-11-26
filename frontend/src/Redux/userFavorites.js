import * as ActionTypes from './actionTypes';

export const UserFavorites = (state = {
        beerFavorites: [],
        breweryFavorites: [],
        isLoading: false,
        }, action) => {
       
        switch (action.type) {
            case ActionTypes.ADD_USER_FAVORITE:
                console.log(action.payload)
                //this should add the fetched favorites into the store state when recieved from ASYNC API Call base on type
                if(action.payload.type === 'beer'){
                    return  {...state, isLoading:false, beerFavorites:[...state.beerFavorites.concat(action.payload.userFavorites)]}}
                else if(action.payload.type === 'brewery'){
                    return  {...state, isLoading:false, breweryFavorites: [...state.breweryFavorites.concat(action.payload.userFavorites)]}}
                else {break} 
                
            case ActionTypes.REMOVE_USER_FAVORITE:{
                    if(action.payload.type === 'beer'){
                        return {...state, beerFavorites: state.beerFavorites.filter((favorite)=>{return favorite.id !== action.payload.favoriteId})}}
                    else if(action.payload.type === 'brewery'){
                        return {...state, breweryFavorites: state.breweryFavorites.filter((favorite)=>{return favorite.id !== action.payload.favoriteId})}}
                    else {break}
                    }    

             //short call to return ACTION for ASYNC API call
            case ActionTypes.LOADING_USER_FAVORITES:{
                return {...state, isLoading:true}}

            default:
                return state;
        }
        }