import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthenticationService from '../API/AuthenticationService.js'

/**
 * This component is responsible for the authenticated route
 */
class AuthenticatedRoute extends Component {
    render() {
        if(AuthenticationService.isUserLoggedIn()) {
            return <Route {...this.props}/>
        } else {
            return (<Redirect to="/login" />)
        }
    }
}

export default AuthenticatedRoute