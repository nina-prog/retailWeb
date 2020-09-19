import React, {Component } from 'react'
import CreateNewProductComponent from '../CreateNewProductComponent.jsx'
import LinkButtonComponent from '../LinkButtonComponent'

class StoreSignedInComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
          todos : 
            [
              {id: 1, title: 'Apfel', price: 5.90, description: 'Dies ist ein Apfel'},
              {id: 2, title: 'Banane', price: 3.90, description: 'Dies ist eine Banane'},
              {id: 3, title: 'Birne', price: 4.90, description: 'Dies ist eine Birne'}
            ]
      }
      this.handleEdit = this.handleEdit.bind(this)
    }    
    handleEdit(event) {
        this.setState({
            [event.target.name]
                :event.target.value
        })
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
                                        <td>{todo.title}</td>
                                        <td>{todo.price.toString()}</td>
                                        <td>{todo.description}</td>
                                        <td><LinkButtonComponent className="btn btn-primary" to={`/product/edit/${todo.id}`}>Edit</LinkButtonComponent></td>
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