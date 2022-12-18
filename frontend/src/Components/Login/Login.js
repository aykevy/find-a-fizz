import {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addToken, addUser} from '../../Redux/actionCreators'
import {baseUrl} from '../../Shared/baseUrl'
import axios from 'axios'
import './Login.css'

const mapDispatchToProps = (dispatch) => ({
    addToken: () =>  dispatch(addToken()),
    addUser: () => dispatch(addUser()) 
});

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleLogin = async () => {
        const data = { username: this.state.username, password: this.state.password };
        const userWithToken = await axios.post(baseUrl + '/login', data)

        await this.props.dispatch(addToken(userWithToken.data.token));
        await this.props.dispatch(addUser(userWithToken.data.user));
        await this.props.fetchReviews(userWithToken.data.user.id);
        await this.props.fetchFavorites(userWithToken.data.user.id);
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <div className='login--page--main'>
                <body className='login--page--boxes'>
                    <img className='login--logo' src='./assets/loginImage.png' alt='Welcome In'/>
                    <div className='login--inputs'>
                    <img className='login--logo' src='./assets/FindAFizzLogo.png' alt='Welcome In'/>
                        <h1>Login Here</h1>
                        
                        <label class="sr-only">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            class="form-control"
                            placeholder="Username"
                            v-model="user.username"
                            onChange={this.handleInputChange}
                            required
                        />

                        <label class="sr-only">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            class="form-control"
                            placeholder="Password"
                            v-model="user.password"
                            onChange={this.handleInputChange}
                            required
                        />

                        <Link to="/register">Need an account?</Link>
                        <Link to='/home'>
                            <button className='submit--button' type="submit" onClick={this.handleLogin}>Sign in</button>
                        </Link>
          
                    </div>
                </body>
            </div>
        )
    }
}

export default withRouter(connect(mapDispatchToProps)(Login));