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


class Main extends Component {
    constructor(props){
        super(props);
    }

    handleLogout = () => {
        this.props.addToken("")
        this.props.deleteUser()
      
    }

    //fetch API information on load of Comp.
    componentDidMount(){
        this.props.fetchBeers();
        this.props.fetchBreweries();
        
    }
    render(){
        const isLoggedIn = this.props.token.token !== undefined;
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
                    <Route path='/home' component={isLoggedIn ? () => <Home/> : <Login/>}/>
                    <Route path='/beers' component={isLoggedIn  ? () => <Beers beers={this.props.beers.beers[0]} getBeer={this.props.getBeer}/> : <Login/>}/>
                    <Route path='/breweries' component={isLoggedIn ? () => <Breweries breweries={this.props.breweries.breweries[0]} getBrewery={this.props.getBrewery}/> : <Login/>}/>
                    <Route path='/beer/:id' component={ isLoggedIn ? () => <Beer selectedBeer = {this.props.beers.selectedBeer} /> : <Login/>} />
                    <Route path='/brewery/:id' component={isLoggedIn ? () => <Brewery selectedBrewery = {this.props.breweries.selectedBrewery} /> : <Login/>} />
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