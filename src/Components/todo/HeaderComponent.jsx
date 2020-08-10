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
                    
                    <ul className="navbar-nav"> 
                        <li><Link className="nav-link" to="/home">Home</Link></li>
                        {!isUserLoggedIn &&
                        <form class="form-inline">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>}
                        
                        {isUserLoggedIn && <li><Link className="nav-link" to="/store/in28minutes">StoreNameMussHierStehen</Link></li>}
                        <li><Link className="nav-link" to="/product/Tomatos">Tomatos</Link></li>
                        {isUserLoggedIn && <li><Link className="nav-link" to="/product/edit/Tomatos">EditTomatos</Link></li>}
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