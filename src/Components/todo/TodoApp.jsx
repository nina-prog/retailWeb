import React, {Component } from 'react'
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent'
import ProductComponent from './ProductComponent'
import EditProductComponent from './EditProductComponent'
import FooterComponent from './FooterComponent'
import ErrorComponent from './ErrorComponent'
import WishListComponent from './WishListComponent.jsx'
import AdminComponent from './AdminComponent.jsx'
import EditStoreInformation from './EditStoreInformation.jsx'
import StoreSignedInComponent from './StoreSignedInComponent.jsx'
import StoreSettingComponent from './StoreSettingComponent.jsx'
import StoreEditComponent from './StoreEditComponent.jsx'
import StoreComponent from './StoreComponent.jsx'
import ViewBlockComponent from './ViewBlocksComponent.jsx'
import ContactAdmin from './ContactAdmin.jsx'


class TodoApp extends Component {
    render (){
        return(
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={ViewBlockComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/wishlist" component={WishListComponent}/>
                        <Route path="/product/:id" exact component={ProductComponent}/>
                        <Route path="/store/:id" exact component={StoreComponent}/>
                        <Route path="/admin" exact component={AdminComponent}/>
                        <Route path="/contactadmin" exact component={ContactAdmin}/>
                        <AuthenticatedRoute path="/product/edit/:id" component={EditProductComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/store/edit/:id" component={StoreEditComponent}/>
                        <AuthenticatedRoute path="/store/settings/:id" component={StoreSettingComponent}/>
                        <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        <AuthenticatedRoute path="/EditStoreInformation" component={EditStoreInformation}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
                
            </div>
        );
    }
}

export default TodoApp;