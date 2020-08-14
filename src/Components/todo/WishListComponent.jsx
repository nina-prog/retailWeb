import React, {Component } from 'react'
//import Tomatos from '../../img/Tomatos.jpeg'
import  WishListService from './WishListService';

class WishListComponent extends Component {

    addToWhishListClicked() {

        WishListService.addToWhishList(this.state.product_id)
    }

    deleteFromWhishListClicked() {
        WishListService.deleteFromWishList(this.state.product_id)
    }

    deleteWhishListClicked() {
        WishListService.deleteWishList()
    }

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

        this.addToWhishListClicked = this.addToWhishListClicked.bind(this);
        this.deleteFromWhishListClicked = this.deleteFromWhishListClicked.bind(this);
        this.deleteWhishListClicked = this.deleteWhishListClicked.bind(this);
        this.handleChange = this.handleChange.bind(this);


        
      }  
      
      
    handleChange(event) {
        this.setState({
            [event.target.name]
                :event.target.value
        })
    }
      
      render () {
          return (
              <div> 
                  <h1>Wishlist</h1>
                  <div className="container">
                    <div className="container">
                        <input type="text" name="product_id" value={this.state.product_id} onChange={this.handleChange}/>   
                        <button className="btn btn-success"onClick={this.addToWhishListClicked}> addToWhishList </button>
                        <button className="btn btn-success"onClick={this.deleteFromWhishListClicked}> Delete from Whish List </button>
                        <button className="btn btn-success"onClick={this.deleteWhishListClicked}> Delete Whish List </button>
                    </div>


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