import React, {Component } from 'react'
import ProductService from '../../API/todo/ProductService.js'
import AuthentificationService from '../../API/todo/AuthenticationService.js'

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
    handleChange (event) {
        this.setState({
            [event.target.name]
                :event.target.value
        })
    }
    handleClickNewProduct (event) {
        this.setState({ isNewProductClicked: true })
    }
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
            .catch(response => alert("API POST Error"))
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
    retriveWelcomeMessage(){
        ProductService.getProducts()
        .then(response => this.handleSuccessfulResponse(response))
        .catch(response => alert("REST API Error"))
    }
    handleSuccessfulResponse(response){
        this.setState({welcomeMessage: response.data})
    }
}

export default CreateNewProductComponent;