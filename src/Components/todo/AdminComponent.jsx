import React, {Component } from 'react'


class AdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos : 
              [
                {id: 1, description: 'Lidl'},
                {id: 2, description: 'Aldi'},
                {id: 3, description: 'Rewe'}
              ]
        }
      }    
      
      render () {
          return (
              <div> 
                  <h1>Admin Page</h1>
                  <div className="container">
                      <table className="table">
                          <tbody>
                              {
                                  this.state.todos.map(
                                  todo =>
                                      <tr key={todo.id}>
                                          <td>{todo.description}</td>
                                          <td><button type="button" className="btn btn-primary">reset Password</button></td>
                                          <td><button type="button" className="btn btn-danger">delete Store</button></td>
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