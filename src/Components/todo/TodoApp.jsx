import React, {Component } from 'react'
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent'
import ProductComponent from './ProductComponent'
import FooterComponent from './FooterComponent'
import ErrorComponent from './ErrorComponent'


class TodoApp extends Component {
    render (){
        return(
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticatedRoute path="/store/:name" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/product/:name" component={ProductComponent}/>                        
                        <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
                
            </div>
        );
    }
}

export default TodoApp;