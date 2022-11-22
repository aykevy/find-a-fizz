import { baseUrl } from '../Shared/baseUrl';
import * as ActionTypes from './actionTypes'

//***************         User Actions            **********************************

export const addToken = (token) => ({
    type: ActionTypes.ADD_TOKEN,
    payload: token
});

export const addUser = (user) => ({
    type: ActionTypes.ADD_USER,
    payload: user
})

export const deleteUser = () => ({
    type: ActionTypes.DELETE_USER
})


//*************           Beer Actions         **********************************

//function will call the add-beers listener, payload is a beer array
export const addBeers = (beers) => ({
    type: ActionTypes.ADD_BEERS,
    payload: [...beers]
})

export const selectBeer = (selectedBeer) => ({
    type: ActionTypes.SELECT_BEER,
    payload: selectedBeer
})
export const deleteBeers = () => ({
    type: ActionTypes.DELETE_BEERS
})

// No data exchange - just a simple action to get an OK
export const beersLoading = () => ({
    type: ActionTypes.LOADING_BEERS,
})

// calls the beers.js listener to send back the 'OK' action to intital call, then calls api, and sends that GET listener when it recieves it.
export const getBeer = (id) =>{
    return dispatch =>{
        dispatch(beersLoading());
     ActionTypes.axios.get('/beer/' + id)
        .then(res => {dispatch(selectBeer(res.data))})
        //TO DO - ERROR HANDLING
        .catch(error => console.log(error.message))       
}};

// calls the beers.js listener to send back the 'OK' action to intital call, then calls api, and sends that data to a addBeers listener when it recieves it.
export const fetchBeers = (dispatch) => {
    return dispatch =>{
        dispatch(beersLoading());
    
     ActionTypes.axios.get('/beers')
        .then(res => {dispatch(addBeers(res.data))})
        //TO DO - ERROR HANDLING
        .catch(error => console.log(error.message))       
}};

//*************           Brewery Actions         **********************************

//function will call the add-breweries listener, payload is a brewery array
export const addBreweries = (breweries) => ({
    type: ActionTypes.ADD_BREWERIES,
    payload: [...breweries]
})

export const selectBrewery = (selectedBrewery) => ({
    type: ActionTypes.SELECT_BREWERY,
    payload: selectedBrewery
})
export const deleteBrewery = () => ({
    type: ActionTypes.DELETE_BREWERIES
})

// No data exchange - just a simple action to get an OK
export const breweryLoading = () => ({
    type: ActionTypes.LOADING_BREWERIES,
})

// calls the brewey.js listener to send back the 'OK' action to intital call, then calls api, and sends that GET listener when it recieves it.
export const getBrewery = (id) =>{
    return dispatch =>{
        dispatch(breweryLoading());
     ActionTypes.axios.get('/brewery/' + id)
        .then(res => {dispatch(selectBrewery(res.data))})
        //TO DO - ERROR HANDLING
        .catch(error => console.log(error.message))       
}};

// calls the brewery.js listener to send back the 'OK' action to intital call, then calls api, and sends that data to a addBeers listener when it recieves it.
export const fetchBreweries = (dispatch) => {
    return dispatch =>{
        dispatch(beersLoading());
    
     ActionTypes.axios.get('/breweries')
        .then(res => {dispatch(addBreweries(res.data))})
        //TO DO - ERROR HANDLING
        .catch(error => console.log(error.message))       
}};


///Review stuff?

export const postReview = (userId,id,review,rating,type) =>{
    return dispatch =>{
        let newReview = {}
        if (type ==='beer') {
            newReview = {
            userId:userId,
            beerId:id,
            review:review,
            rating:rating
         }
        }
        else {
            newReview = {
                userId:userId,
                breweryId:id,
                review:review,
                rating:rating
         }

        newReview.createdAt = new Date().toISOString()

        if(type === 'beer'){   
        ActionTypes.axios.post('/beerReview',newReview)
            .then(res => {alert('Review posted, Thank you!')})
            //TO DO - ERROR HANDLING
            .catch(error => console.log(error.message)) 
        }    
        if(type === 'brewery'){   
            ActionTypes.axios.post('/breweryReview',newReview)
            .then(res => {alert('Review posted, Thank you!')})
            //TO DO - ERROR HANDLING
            .catch(error => console.log(error.message)) 
            }    
        }
    }
};
