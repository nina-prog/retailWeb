import React, {Component } from 'react'
import AuthentificationService from '../../API/todo/AuthenticationService.js'


class LoginComponent extends Component {
    constructor(props) {
        super (props)
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]
                :event.target.value
        })
    }
    loginClicked() {
        AuthentificationService.executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                console.log(response.data.token)
                AuthentificationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                this.props.history.push(`/welcome/${this.state.username}`)
            }).catch( () => {
                alert ("Login Failed")
            })
    }

    render(){
        return(
            <div>
                <h1>Welcome to the Retail Project</h1>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success"onClick={this.loginClicked}> Login </button>
                </div>
            </div>
        );
    }
}

export default LoginComponent;