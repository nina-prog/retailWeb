import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import Axios from "axios"
import AuthenticationService from '../../API/todo/AuthenticationService.js'

/**
 * This component is responsible for the authenticated route
 */

class AuthenticatedRoute extends Component {
    componentWillMount(){
        this.setupAxiosInterceptors()
    }

    /**
     * Token is initialised for authentication route
     * @param {token} token token for authentication route
     */

    setupAxiosInterceptors(token) {
        Axios.interceptors.request.use(
            (config) => {
                if (AuthenticationService.isUserLoggedIn()) {
                    config.headers.authorization = sessionStorage.getItem("USER_TOKEN")
                }
                return config
            }
        )
    }
    render() {
        if(AuthenticationService.isUserLoggedIn()) {
            return <Route {...this.props}/>
        } else {
            return (<Redirect to="/login" />)
        }
    }
}

export default AuthenticatedRoute