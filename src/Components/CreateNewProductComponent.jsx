import React, {Component } from 'react'
import ProductService from '../API/ProductService.js'
import AuthentificationService from '../API/AuthenticationService.js'

/**
 * This components is responsible to create new products 
 */

class CreateNewProductComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Product name',
            price: 1.99,
            isNewProductClicked: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClickNewProduct = this.handleClickNewProduct.bind(this);
        this.createNewProduct = this.createNewProduct.bind(this)
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
     * Method which is responsible to handle new products
     * @param {event} event event if a new product is created 
     */
    handleClickNewProduct (event) {
        this.setState({ isNewProductClicked: true })
    }

    /**
     * Method which creates a new product
     * @param {event} event event if a new product is created
     */

    createNewProduct (event) {
        let newProduct = {
            category: {
                categoryId: 2,
                catName: "sweets"
            },
            picture: null,
            name: this.state.title,
            price: this.state.price,
            description: null,
            limitations: null,
            remainingStock: null
        }
        ProductService.createProduct(AuthentificationService.getLoggedInUsername(), newProduct)
            .then(response => {
                alert("New Product created!")
                window.location.reload(false);
                })
            .catch(response => alert("Session expired, please sign in again [API Error]"))
    }
    
    render () {
        return (
            <>
                <div className="container">
                    <button type="button" className="btn btn-primary mr-2 mb-2" onClick={this.handleClickNewProduct}>New Product</button>
                    {this.state.isNewProductClicked && <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>}
                    {this.state.isNewProductClicked && <input type="number" name="price" min="0" value={this.state.price} onChange={this.handleChange}/>}
                    {this.state.isNewProductClicked && <button type="button" className="btn btn-success ml-2 mb-2" onClick={this.createNewProduct}>Create New Product</button>}
                </div>
            </>
        )
    }

    /**
     * Method which retrieves the welcome message
     */

    retriveWelcomeMessage(){
        ProductService.getProducts()
        .then(response => this.handleSuccessfulResponse(response))
        .catch(response => alert("REST API Error"))
    }

    /**
     * Method which handles the new product data
     * @param {object} response new product data
     */

    handleSuccessfulResponse(response){
        this.setState({welcomeMessage: response.data})
    }
}

export default CreateNewProductComponent;