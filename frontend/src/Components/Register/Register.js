import axios from 'axios'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import {baseUrl} from '../../Shared/baseUrl'
import './Register.css'

//short Regex to validate password - non functional -cause it would be annoying normally during testing
// const validateRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.gm();

class Register extends Component{


    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            role:'USER'
        }
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
        if (event.target.checked) {
            this.setState({role:'BREWER'})
        }
        else if (!event.target.checked) {
            this.setState({role:'USER'})
        }
    }

    handleSubmit = (values) => {
        const data = {username: this.state.username, password: this.state.password, confirmPassword: this.state.confirmPassword, role:this.state.role}
        if (this.state.password === this.state.confirmPassword) {
            axios.post(baseUrl + "/register", data)
            alert('Account has been created, return to Login page to Login.')
        }
        else {
            alert("Password and Confirm Password must match!!!")
        }
    }

    render() {
        return (
            <div className='register--page--main'>
                <body className='register--page--boxes'>
                    <img className='register--logo' src= './assets/RegisterLogo.png' alt='Register Now'/>
                    <div className='register--inputs'>
                        <h1>Create Account</h1>
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

                        <input
                            type="password"
                            id="password-confirm"
                            name="confirmPassword"
                            class="form-control"
                            placeholder="Confirm Password"
                            v-model="user.password"
                            onChange={this.handleInputChange}
                            required
                        />

                        <label for='isBrewer' className='form-control'> I am a Brewery owner</label>
                        <input
                            type="checkbox"
                            id="isBrewer"
                            name='isBrewer'
                            v-model="user.role"
                            className='register--owner--checkbox'
                            onChange={this.handleInputChange}
                        />

                        <button className='submit--button' type="submit" onClick={()=> this.handleSubmit()}>Create Account</button>
                        <Link to="/login">Already have an account?</Link>
                    </div>
                </body>
            </div>
        )
    }
}

export default Register;