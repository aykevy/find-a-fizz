import {Component} from 'react'
import {Switch, Route, Redirect, Link} from 'react-router-dom'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Home from '../Home/Home'
import Header from '../Header/Header'
import {addToken, deleteUser, fetchBeers,getBeer,fetchBreweries,getBrewery,postReview,getLocation,addLocation, fetchReviews, deleteUserReview,fetchFavorites,deleteUserFavorite,addUserFavorite} from '../../Redux/actionCreators'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Beers from '../Beers/Beers'
import Beer from '../Beers/Beer'
import Breweries from '../Breweries/Breweries'
import Brewery from '../Breweries/Brewery'
import Accounts from '../Accounts/Accounts'
import './Main.css'

//Setting the Redux store to this comp state so that if Store Changes State does and will rerender
const mapStateToProps = state => {
    return {
        token: state.token,
        user: state.user,
        beers: state.beers,
        breweries: state.breweries,
        location: state.location,
        userReviews:state.userReviews,
        userFavorites:state.userFavorites
    }
}

//Actions available from the store to be passed to comp. and their props.

const mapDispatchToProps = (dispatch) => ({
    //user dispatches
    addToken: () => { dispatch(addToken()) },
    deleteUser: () => { dispatch(deleteUser())},

    //beer dispatches
    fetchBeers: () => {dispatch(fetchBeers())},
    getBeer: (id) => {dispatch(getBeer(id))},

    //Brewery dispatches
    fetchBreweries: () => {dispatch(fetchBreweries())},
    getBrewery: (id) => {dispatch(getBrewery(id))},

    //review dispatches
    postReview: (userId,beerId,review,rating,type) => {dispatch(postReview(userId,beerId,review,rating,type))},
    fetchReviews: (id) => {dispatch(fetchReviews(id))},
    deleteUserReview: (review,type) =>{dispatch(deleteUserReview(review,type))},

    //location dispatches
    addLocation: (latitude,longitude) => {dispatch(addLocation(latitude,longitude))},
    getLocation: () => {dispatch(getLocation())},

    //favorite dispatches
    fetchFavorites: (id) => {dispatch(fetchFavorites(id))},
    addUserFavorite: (itemId,userId,type) =>{dispatch(addUserFavorite(itemId,userId,type))},
    deleteUserFavorite: (id,type) =>{dispatch(deleteUserFavorite(id,type))}
});

//Setting up vars to determine daily beer/brewery for Home page
const today = new Date();
let todaysBrewery = {};
let todaysBeer = {};
const sendToLogin = <Redirect to='/login'/>



class Main extends Component {
    constructor(props){
        super(props);
    }

    getTodaysItems = () => {
        todaysBrewery =  this.props.breweries.breweries[0][(((1000 * today.getMonth()) + (1000 * today.getDay()))%this.props.breweries.breweries[0].length)];
        todaysBeer =  this.props.beers.beers[0][(((1000 * today.getMonth()) + (1000 * today.getDay()))%this.props.beers.beers[0].length)];
    }

    handleLogout = () => {
        this.props.addToken("")
        this.props.deleteUser()
      
    }

    //fetch API information on load of Comp.
    componentDidMount = () =>{ 
        this.props.fetchBeers();
        this.props.fetchBreweries();
    
        //set some stuff up to getlocation data

        navigator.geolocation.getCurrentPosition( position => {
            const long = position.coords.longitude;
            const lati = position.coords.latitude;
            this.props.addLocation(lati,long);
          })
          
        
    }
   
    render(){
        return(
            <div>
                {(this.props.location.pathname !== '/login') &&  <Header handleLogout={this.handleLogout} getBrewery={this.props.getBrewery} getBeer={this.props.getBeer} beers={this.props.beers.beers[0]} breweries={this.props.breweries.breweries[0]}/>}
    
                {/* Routing information - this.props.token.token checks to verify user is logged in, if not no information will display and should reroute to Login page*/}
                <Switch>
                    <Route exact path='/' render = { ()=> {this.props.token.token ? <Redirect to='/home'/> : <Redirect to='/login'/> }}/>   
                    <Route exact path='/login' component={() => <Login fetchReviews={this.props.fetchReviews} fetchFavorites={this.props.fetchFavorites} />}/>
                    
                    <Route exact path='/account' component={ this.props.token.token !== undefined ? () => 
                        <Accounts user={this.props.user} userReviews={this.props.userReviews} fetchReviews={this.props.fetchReviews}
                                  beers={this.props.beers.beers[0]} breweries={this.props.breweries.breweries[0]} getBeer={this.props.getBeer} getBrewery={this.props.getBrewery}
                                  deleteUserReview={this.props.deleteUserReview} favorites={this.props.userFavorites}          /> : null}/>

                    <Route exact path='/register'component={() => <Register/>}/>

                    <Route exact path='/home' component={this.props.token.token !== undefined ? () => 
                        <Home todaysBrewery={todaysBrewery} todaysBeer={todaysBeer} getTodaysItems={this.getTodaysItems} 
                              getBeer={this.props.getBeer} getBrewery={this.props.getBrewery}
                              userLocation={this.props.location} breweries={this.props.breweries.breweries[0]}
                              /> : null }/> 

                    <Route exact path='/beers' component={this.props.token.token !== undefined  ? () =>
                        <Beers beers={this.props.beers.beers[0]} getBeer={this.props.getBeer} favorites={this.props.userFavorites.beerFavorites}
                               addFavorite={this.props.addUserFavorite} remFavorite={this.props.deleteUserFavorite} userId={this.props.user.id}/> : null}/>

                    <Route exact path='/breweries' component={this.props.token.token !== undefined ? () =>
                         <Breweries breweries={this.props.breweries.breweries[0]} getBrewery={this.props.getBrewery} favorites={this.props.userFavorites.breweryFavorites} 
                                    addFavorite={this.props.addUserFavorite} remFavorite={this.props.deleteUserFavorite} userId={this.props.user.id}/>  : null}/>

                    <Route exact path='/beer/:id' component={ this.props.token.token !== undefined ? () => 
                        <Beer selectedBeer = {this.props.beers.selectedBeer} postReview={this.props.postReview} 
                              userId={this.props.user.id}  favorites={this.props.userFavorites.beerFavorites} 
                              addFavorite={this.props.addUserFavorite} remFavorite={this.props.deleteUserFavorite} /> : null} />

                    <Route exact path='/brewery/:id' component={this.props.token.token !== undefined ? () => 
                        <Brewery selectedBrewery = {this.props.breweries.selectedBrewery} postReview= {this.props.postReview} 
                                 userId={this.props.user.id} userLocation={this.props.location} favorites={this.props.userFavorites.breweryFavorites} 
                                 addFavorite={this.props.addUserFavorite} remFavorite={this.props.deleteUserFavorite} /> : null} />           
                </Switch>
                {(this.props.location.pathname !== '/login') &&
                <>
                <div className='footer--spaced'></div>
                <footer className='footer'>
                   <h5 className='footer--brand'>Find-A-Fizz</h5>
                   <p className='footer--company'>&copy; 2022 - A Brewery Company</p>
                </footer></>
                }
            </div>
        )
    }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));