

//user action types
export const ADD_TOKEN = 'ADD_TOKEN';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';

//beer action types
export const ADD_BEERS = 'ADD_BEERS'
export const DELETE_BEERS ='DELETE_BEERS'
export const GET_BEER ='GET_BEER'
export const FETCH_BEERS = 'FETCH_BEERS'
export const LOADING_BEERS = 'LOADING_BEERS'
export const SELECT_BEER = 'SELECT_BEER'
//brewery action types
export const ADD_BREWERIES = 'ADD_BREWERIES'
export const DELETE_BREWERIES ='DELETE_BREWERIES'
export const GET_BREWERY ='GET_BREWERY'
export const FETCH_BREWERIES = 'FETCH_BREWERIES'
export const LOADING_BREWERIES = 'LOADING_BREWERIES'
export const SELECT_BREWERY = 'SELECT_BREWERY'
//Location store
export const ADD_LOCATION = 'ADD_LOCATION'
export const GET_LOCATION = 'GET_LOCATION'
//User Reviews
export const ADD_USER_REVIEWS = 'ADD_USER_REVIEWS'
export const LOADING_USER_REVIEWS = 'LOADING_USER_REVIEWS'
export const DELETE_USER_REVIEWS = 'DELETE_USER_REVIEWS'
export const UPDATE_USER_REVIEWS = 'UPDATE_USER_REVIEWS'
export const REMOVE_USER_REVIEW = 'REMOVE_USER_REVIEW'
//USER FAvorites
export const FETCH_USER_FAVORITES = 'FETCH_USER_FAVORITES'
export const LOADING_USER_FAVORITES = 'LOADING_USER_FAVORITES'
export const ADD_USER_FAVORITE = 'ADD_USER_FAVORITE'
export const REMOVE_USER_FAVORITE = 'REMOVE_USER_FAVORITE'
export const DELETE_USER_FAVORITES = 'DELETE_USER_FAVORITES'
export const UPDATE_USER_FAVORITES = 'UPDATE_USER_FAVORITES'



//Setting up axios
export const axios = require('axios').default;