import * as ActionTypes from './actionTypes';

export const UserReviews = (state = {
        beerReviews: [],
        breweryReviews: [],
        isLoading: false,
        }, action) => {
       
            switch (action.type) {
            case ActionTypes.ADD_USER_REVIEWS:
                //this should add the fetched reviews into the store state when recieved from ASYNC API Call base on type
                if(action.payload.type === 'beer'){
                    return  {...state, loading:false, beerReviews: action.payload.userReviews}}
                if(action.payload.type === 'brewery'){
                    return  {...state, loading:false, breweryReviews: action.payload.userReviews}}
                    
                //short call to return ACTION for ASYNC API call
            case ActionTypes.LOADING_USER_REVIEWS:
                return {...state, loading:true}

                //TO DO - Add API call here to remove beer info to the list of beers // admin only
            case ActionTypes.DELETE_USER_REVIEWS:
                return { ...state};
            default:
                return state;
        }
        }