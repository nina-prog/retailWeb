import React, {Component } from 'react'
//import Tomatos from '../../img/Tomatos.jpeg'
import  WishListService from './WishListService';
import HelloWorldservice from '../../API/todo/HelloWordService.js'


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

    getProductsfromWishlistClicked () {
        let arrayWithProducts = WishListService.getProductsfromWishlist()
        let data = [arrayWithProducts.length]
        console.log(arrayWithProducts)
        for ( let i=0; i<arrayWithProducts.length; i++ ) {
            /* console.log(parseInt(arrayWithProducts[i])) */
            data[i] = HelloWorldservice.getProductInformation(parseInt(arrayWithProducts[(i)]))
            console.log(data[i].PromisValue.data)
            
        } 
       /*  console.log(data)

        this.setState({
            products: arrayWithProducts[i]
        })  */
        console.log(arrayWithProducts)
    }

//Aus Session storage auslesen und in Array speichern 
//For-Schleife durchlaufen lassen, sodass für jedes Produkt ein API-Call die benötigten Informationen holt 

    constructor(props) {
        super(props)
        this.state = {

            products: 
            [
                {product_id: '2', product: 'Apfel', category: 'Essen', price: '5,90' },
                {test: '1', title: 'Apfel'}
            ]
               
        }

        this.addToWhishListClicked = this.addToWhishListClicked.bind(this);
        this.deleteFromWhishListClicked = this.deleteFromWhishListClicked.bind(this);
        this.deleteWhishListClicked = this.deleteWhishListClicked.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getProductsfromWishlistClicked = this.getProductsfromWishlistClicked.bind(this); 


        
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
                        <button className="btn btn-success"onClick={this.getProductsfromWishlistClicked}> Get Items from Wishlist </button>
                        <button className="btn btn-info"onClick={() => window.print()}>PRINT</button>
                    </div>


                      <table className="table table-bordered">
                          <thead>
                              <tr>
                                  <th>product_id</th>
                                  <th>Product</th>
                                  <th>Category</th>
                                  <th>Price</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                                  this.state.products.map(
                                  product =>
                                      <tr >
                                          <td>{product.product_id}</td>
                                          <td>{product.product}</td>
                                          <td>{product.category}</td>
                                          <td>{product.price}</td>
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