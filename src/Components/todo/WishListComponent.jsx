import React, {Component } from 'react'
import Tomatos from '../../img/Tomatos.jpeg'

class WishListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos : 
              [
                {id: 1, description: 'Tomatos', done:false, targetDate: new Date()},
                {id: 2, description: 'Carrots', done:false, targetDate: new Date()},
                {id: 3, description: 'Bananas', done:false, targetDate: new Date()}
              ]
        }
      }    
      
      render () {
          return (
              <div> 
                  <h1>List Todos</h1>
                  <div className="container">
                      <table className="table table-bordered">
                          <thead>
                              <tr>
                                  <th>description</th>
                                  <th>Is competed?</th>
                                  <th>Target Date</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                                  this.state.todos.map(
                                  todo =>
                                      <tr key={todo.id}>
                                          <td>{todo.description}</td>
                                          <td>{todo.done.toString()}</td>
                                          <td>{todo.targetDate.toString()}</td>
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



export default WishListComponent;