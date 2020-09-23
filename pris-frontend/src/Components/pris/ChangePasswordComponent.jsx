import React, {Component } from 'react'
import AuthentificationService from './AuthenticationService.js'
import ViewBlockComponent from './ViewBlocksComponent.jsx'


class ChangePasswordComponent extends Component {
    constructor(props) {
        super (props)
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false,
            product: ''
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
        //in28minutes,dummy
        if(this.state.username==='in28minutes' && this.state.password==='dummy'){
            AuthentificationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.history.push(`/store/${this.state.username}`)
            this.setState({showSuccessMessage:true})
            this.setState({hasLoginFailed:false})
        } else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
        
    }
    render(){
        return(
            <div>
                <h1>Change Password</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login succsessful</div>}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success"onClick={this.loginClicked}> Login </button>
                </div>
            </div>
        );
    }
}

export default ChangePasswordComponent;