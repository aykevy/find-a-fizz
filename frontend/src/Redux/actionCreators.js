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
export const deleteBeers = () => ({
    type: ActionTypes.DELETE_BEERS
})

// No data exchange - just a simple action to get an OK
export const beersLoading = () => ({
    type: ActionTypes.LOADING_BEERS,
})


// calls the beers.js listener to send back the 'OK' action to intital call, then calls api, and sends that data to a addBeers listener when it recieves it.
export const fetchBeers = (dispatch) => {
    return dispatch =>{
        dispatch(beersLoading());
    
     ActionTypes.axios.get('/beers')
        .then(res => {dispatch(addBeers(res.data))})
        //TO DO - ERROR HANDLING
        .catch(error => console.log(error.message))       
}};
