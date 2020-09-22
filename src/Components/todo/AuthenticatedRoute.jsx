import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import Axios from "axios"
import AuthenticationService from '../../API/todo/AuthenticationService.js'

class AuthenticatedRoute extends Component {
    componentWillMount(){
        this.setupAxiosInterceptors()
    }
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