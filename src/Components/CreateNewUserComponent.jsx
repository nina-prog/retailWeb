import React, {Component } from 'react'
import UserService from '../API/UserService.js'

/**
 * This component is responsible for creating new users 
 */

class CreateNewUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'username',
            password: 'password',
            storename: 'store name',
            isNewProductClicked: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClickNewUser = this.handleClickNewUser.bind(this);
        this.createNewUser = this.createNewUser.bind(this)
    }

    /**
     * Method which handles changes 
     *  @param {event} event event if something changes 
     */

    handleChange (event) {
        this.setState({
            [event.target.name]
                :event.target.value
        })
    }

    /**
     * Method which handles if new user is clicked
     * @param {event} event event if new user is created
     */
    handleClickNewUser (event) {
        this.setState({ isNewProductClicked: true })
    }

    /**
     * Method which creates a new user
     * @param {event} event if new user is created
     */
    createNewUser (event) {
        let newUser
        if (this.props.role === 'ADMIN'){
            newUser = {
                user: {
                    username: this.state.username,
                    password: this.state.password,
                    role:"ADMIN"
                },
                store : {
                    name: ""
                }
            }
        } else if (this.props.role === 'STORE'){
            newUser = {
                user: {
                    username: this.state.username,
                    password: this.state.password,
                    role:"STORE"
                },
                store : {
                    name: this.state.storename
                }
            }
        } else {
            /* alert("An Error Occourt while creating the User! Please Check") */
        }
        
        UserService.createUser(newUser)
            .then(response => {
                console.log(response.headers)
                alert("New User created!")
                /* window.location.reload(false); */
                })
            .catch(response => alert("An Error Occourt while creating the User! [API Error]"))
    }
    
    render () {
        return (
            <>
                <div className="container">
                    <button type="button" className="btn btn-primary mr-2 mb-2" onClick={this.handleClickNewUser}>New {this.props.role} User</button>
                    {this.state.isNewProductClicked && <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>}
                    {this.state.isNewProductClicked && <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>}
                    {this.state.isNewProductClicked && this.props.role === 'STORE' && <input type="text" name="storename" value={this.state.storename} onChange={this.handleChange}/>}
                    {this.state.isNewProductClicked && <button type="button" className="btn btn-success ml-2 mb-2" onClick={this.createNewUser}>Create New {this.props.role} User</button>}
                </div>
            </>
        )
    }
}

export default CreateNewUserComponent;