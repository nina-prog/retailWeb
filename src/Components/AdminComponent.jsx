import React, {Component } from 'react'
import UserService from '../API/UserService.js'

import CreateNewUserComponent from './CreateNewUserComponent.jsx'

/**
 * This component describes what the admin can do 
 */

class AdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            isDataFetched: false
        }
        this.deleteStoreClicked = this.deleteStoreClicked.bind(this)
      }    
      componentDidMount(){
        UserService.getUser ()
            .then(response => this.handleSuccessfulResponse(response))
            .catch( () => alert("Please sign in with an admin account."))

        /* console.log('GetUserRole1: '+ UserService.getUserRole(1)) */
    }

    /**
     * method which handles the response
     * @param {object} res object with the needed data
     */
    handleSuccessfulResponse(res) {
        this.setState({
            data: res.data,
            isDataFetched : true
        })
    }

    /**
     * method which is responsible to delete a store
     * @param {event} e Event which is happening when a user clicks "delete store"
     */
    deleteStoreClicked(e){
        let id = e.currentTarget.value
        console.log(id)
        if (window.confirm(`Do you really want to delete user ${id}?`)) {
            console.log("You pressed OK!");
            UserService.deleteUser(id)
                .then(response => {
                    alert(`Product ${id} is deleted!`)
                    this.props.history.goBack()
                })
                .catch(response => alert("Please reload an check if the user is deleted."))
          } else {
            console.log("You pressed Cancel!")
          }
    }
      render () {
            if (!this.state.isDataFetched) return null;
            return (
              <div> 
                  <h1>Admin Page</h1>
                  <CreateNewUserComponent role="ADMIN"/>
                  <br/>
                  <CreateNewUserComponent role="STORE"/>
                  <div className="container">
                      <table className="table">
                        <thead>
                            <tr>
                                <th>User id</th>
                                <th>Username</th>
                                <th>Role</th>
                                <th>Delet User</th>
                            </tr>
                        </thead>
                        <tbody>
                              {
                                  this.state.data.map(
                                  user =>
                                      <tr key={user.userId}>
                                          <td>{user.userId}</td>
                                          <td>{user.username}</td>
                                          <td>{user.role}</td>
                                          {/* <td><button type="button" className="btn btn-primary">reset Password</button></td> */}
                                          <td><button type="button" value={user.userId} className="btn btn-danger" onClick={this.deleteStoreClicked}>delete Store</button></td>
                                      </tr>
                                  )
                              }
                          </tbody>
                      </table>
                  </div>
              </div>
          )
      }
  }



export default AdminComponent;