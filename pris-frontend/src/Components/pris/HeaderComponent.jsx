import React, {Component } from 'react'
import {withRouter} from 'react-router';
import{Link} from 'react-router-dom'
import AuthentificationService from '../../API/todo/AuthenticationService.js'

class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchfield: 'Search'
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]
                :event.target.value
        })
    }

    render(){
        const isUserLoggedIn = AuthentificationService.isUserLoggedIn();
        const username = AuthentificationService.getLoggedInUsername();
        //console.log(isUserLoggedIn);
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    
                    <ul className="navbar-nav"> 
                        <li><Link className="nav-link" to="/">Home</Link></li>
                        {!isUserLoggedIn &&
                        /* <form className="form-inline"> */<>
                                <input className="form-control mr-sm-2" /* type="search" */ name="searchfield" value={this.state.searchfield} /* aria-label="Search" */ onChange={this.handleChange}></input>
                                <Link className="btn btn-outline-success my-2 my-sm-0"  to={`/search?keyword=${this.state.searchfield}`}>Search</Link>
                                {/* <button className="btn btn-outline-success my-2 my-sm-0"  to={`/search?keyword=${this.state.searchfield}`}>Search</button> */}
                        {/* </form> */}</>}
                        
                        {isUserLoggedIn && <li><Link className="nav-link" to="/admin">{username}</Link></li>}
                    </ul>
                        
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/wishlist">Wishlist</Link></li>}  
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/store/edit/1">Edit Products</Link></li>} 
                        {isUserLoggedIn && <li><Link className="nav-link" to="/store/settings/1">Settings</Link></li>}  
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthentificationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
            
        )
    }
}

export default withRouter(HeaderComponent);