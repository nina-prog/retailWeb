import React, {Component } from 'react'
import {withRouter} from 'react-router';
import{Link} from 'react-router-dom'
import AuthentificationService from './AuthenticationService.js'

class HeaderComponent extends Component {
    render(){
        const isUserLoggedIn = AuthentificationService.isUserLoggedIn();
        console.log(isUserLoggedIn);
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://capture-me.io">captureme</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthentificationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
            
        )
    }
}

export default withRouter(HeaderComponent);