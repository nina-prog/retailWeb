import React, {Component } from 'react'
import CreateNewProductComponent from './CreateNewProductComponent.jsx'

class StoreSignedInComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
            
          todos : 
            [
              {id: 1, description: 'Learn React', done:false, targetDate: new Date()},
              {id: 2, description: 'Learn Spanish', done:false, targetDate: new Date()},
              {id: 3, description: 'Learn German', done:false, targetDate: new Date()}
            ]
            
      }
      
    }    
    

    render () {
        return (
            
            <div> 
                <h1>List Products</h1>
                
                <CreateNewProductComponent />
                
                <div className="container">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>store_id</th>
                                <th>title</th>
                                <th>price</th>
                                <th>Edit Product</th>
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

export default StoreSignedInComponent;