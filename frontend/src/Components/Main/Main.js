import {Component} from 'react'
import {Switch, Route, Redirect, Link} from 'react-router-dom'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Home from '../Home/Home'
import Header from '../Header/Header'
import {addToken, deleteUser, fetchBeers} from '../../Redux/actionCreators'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Beers from '../Beers/Beers'

const mapStateToProps = state => {
    return {
        token: state.token,
        user: state.user,
        beers: state.beers
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToken: () => { dispatch(addToken()) },
    deleteUser: () => { dispatch(deleteUser())},
    fetchBeers: () => {dispatch(fetchBeers())},
});


class Main extends Component {
    constructor(props){
        super(props);
    }
    
    handleLogout = () => {
        this.props.addToken("")
        this.props.deleteUser()
    }
    componentDidMount(){
        this.props.fetchBeers();
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
                <Switch>
                    <Route path='/login' component={() => <Login/>}/>
                    <Route path='/register'component={() => <Register/>}/>
                    <Route path='/home' component={this.props.token.token !== undefined ? () => <Home/> : null}/>
                    <Route path='/beers' component={this.props.token.token !== undefined ? () => <Beers beers={this.props.beers.beers[0]}/> : null}/>
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