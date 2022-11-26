import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {Token} from './token'
import {User} from './user'
import {Beers} from './beers'
import {Breweries} from './breweries'
import { Location } from './location'
import { UserReviews } from './userReviews'
import { UserFavorites } from './userFavorites'

export const ConfigureStore = () => {
     const store = createStore(
        combineReducers({
            token: Token,
            user: User,
            //adding beers to store
            beers: Beers,
            //adding breweries to store
            breweries:Breweries,
            location:Location,
            userReviews:UserReviews,
            userFavorites:UserFavorites
        }),
        //thunk is the middleware to help with aysnc calls
        applyMiddleware(thunk)
    );

    return store;
}