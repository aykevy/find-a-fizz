import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {Token} from './token'
import {User} from './user'
import {Beers} from './beers'

export const ConfigureStore = () => {
     const store = createStore(
        combineReducers({
            token: Token,
            user: User,
            //adding beers to store
            beers: Beers
        }),
        //thunk is the middleware to help with aysnc calls
        applyMiddleware(thunk)
    );

    return store;
}