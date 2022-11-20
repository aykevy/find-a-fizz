import {Component} from 'react'
import {Switch, Route, Redirect, Link} from 'react-router-dom'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Home from '../Home/Home'
import Header from '../Header/Header'
import {addToken, deleteUser, fetchBeers,getBeer,fetchBreweries,getBrewery} from '../../Redux/actionCreators'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Beers from '../Beers/Beers'
import Beer from '../Beers/Beer'
import Breweries from '../Breweries/Breweries'
import Brewery from '../Breweries/Brewery'

//Setting the Redux store to this comp state so that if Store Changes State does and will rerender
const mapStateToProps = state => {
    return {
        token: state.token,
        user: state.user,
        beers: state.beers,
        breweries: state.breweries
    }
}

//Actions available from the store to be passed to comp. and their props.
const mapDispatchToProps = (dispatch) => ({
    addToken: () => { dispatch(addToken()) },
    deleteUser: () => { dispatch(deleteUser())},
    fetchBeers: () => {dispatch(fetchBeers())},
    getBeer: (id) => {dispatch(getBeer(id))},
    fetchBreweries: () => {dispatch(fetchBreweries())},
    getBrewery: (id) => {dispatch(getBrewery(id))}
});

//Setting up vars to determine daily beer/brewery for Home page
const today = new Date();
let todaysBrewery = {};
let todaysBeer = {};
    


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
    }
    render(){
        return(
            <div>
                {this.props.token.token !== undefined ?
                        <div>
                            <Link to='/home'>Home | </Link>
                            <Link to='/login' onClick={this.handleLogout}>logout</Link> 
                            <Redirect to='/home'/>

                        </div>  
                    : 
                        <Link to='/login'>Home | </Link>
                }
                <Header handleLogout={this.handleLogout}/>

                {/* Routing information - this.props.token.token checks to verify user is logged in, if not no information will display and should reroute to Login page*/}
                <Switch>
                    <Route path='/login' component={() => <Login/>}/>
                    <Route path='/register'component={() => <Register/>}/>
                    <Route path='/home' component={this.props.token.token !== undefined ? () => <Home todaysBrewery={todaysBrewery} todaysBeer={todaysBeer} getTodaysItems={this.getTodaysItems} getBeer={this.props.getBeer} getBrewery={this.props.getBrewery}/> : null}/>
                    <Route path='/beers' component={this.props.token.token !== undefined  ? () => <Beers beers={this.props.beers.beers[0]} getBeer={this.props.getBeer}/> : null}/>
                    <Route path='/breweries' component={this.props.token.token !== undefined ? () => <Breweries breweries={this.props.breweries.breweries[0]} getBrewery={this.props.getBrewery}/> : null}/>
                    <Route path='/beer/:id' component={ this.props.token.token !== undefined ? () => <Beer selectedBeer = {this.props.beers.selectedBeer} /> : null} />
                    <Route path='/brewery/:id' component={this.props.token.token !== undefined ? () => <Brewery selectedBrewery = {this.props.breweries.selectedBrewery} /> : null} />
                    <Redirect to='/login'/>
                </Switch>
                <footer>
                   <h5>CopyRight 2022</h5>
                   <button>login</button>
               </footer>
            </div>
        )
    }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));