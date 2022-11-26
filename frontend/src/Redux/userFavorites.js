import * as ActionTypes from './actionTypes';

export const UserFavorites = (state = {
        beerFavorites: [],
        breweryFavorites: [],
        isLoading: false,
        }, action) => {
       
        switch (action.type) {
            case ActionTypes.ADD_USER_FAVORITE:
                
                //this should add the fetched favorites into the store state when recieved from ASYNC API Call base on type
                if(action.payload.type === 'beer'){
                    return  {...state, loading:false, beerFavorites: action.payload.userFavorites}}
                else if(action.payload.type === 'brewery'){
                    return  {...state, loading:false, breweryFavorites: action.payload.userFavorites}}
                else {break} 
                
            case ActionTypes.REMOVE_USER_FAVORITE:{
                    if(action.payload.type === 'beer'){
                        return {...state, beerReviews: state.beerReviews.filter((beerReview)=>{return beerReview.id !== action.payload.review.id})}}
                    else if(action.payload.type === 'brewery'){
                        return {...state, breweryReviews: state.breweryReviews.filter((breweyReview)=>{return breweyReview.id !== action.payload.review.id})}}
                    else {break}
                    }    

             //short call to return ACTION for ASYNC API call
            case ActionTypes.LOADING_USER_FAVORITES:{
                return {...state, loading:true}}

            default:
                return state;
        }
        }