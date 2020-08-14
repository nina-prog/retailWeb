import React, {Component } from 'react'
import Tomatos from '../../img/Tomatos.jpeg'
import WishListService from './WishListService';
import NotifyWhenInStock from './NotifyWhenInStock';
import HelloWorldService from '../../API/todo/HelloWordService.js'
class ProductComponent extends Component {

    constructor(props) {
        super (props)
        this.state = {
            productId: 1,
            category: null,
            picture: null,
            name: 'Cucumber',
            price: 6.90,
            retailStore: null,
            description: `This is the description of a cucumber. It is realy tasty and you gonne like it. It's fresh. Come and buy it today!`,
            limitations: 0.99,
            remainingStock: null,
            
            product_id: '1',
            isProductInWishlist: false
        }
        this.addToWhishListClicked = this.addToWhishListClicked.bind(this);
        this.deleteFromWhishListClicked = this.deleteFromWhishListClicked.bind(this);
        this.UpdateData = this.UpdateData.bind(this);

        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]
                :event.target.value
        })
    }

    addToWhishListClicked() {
        this.setState({ isProductInWishlist: true})
        WishListService.addToWhishList(this.state.product_id)
    }

    deleteFromWhishListClicked() {
        this.setState({ isProductInWishlist: false})
        WishListService.deleteFromWishList(this.state.product_id)
    }

    handleSuccessfulResponse(response){
        console.log(response.data[0])

        document.getElementById("title").innerHTML = response.data[0].name;
        document.getElementById("price").innerHTML = 'Price: ' + response.data[0].price;
        document.getElementById("description").innerHTML = response.data[0].description;
        document.getElementById("stock").innerHTML = response.data[0].stock;
        
    }
    UpdateData() {
        HelloWorldService.executeHelloWorldService()
            .then(response => this.handleSuccessfulResponse(response))
            .catch(response => alert("REST API Error"))
        
        WishListService.deleteWishList()
        
    }

    render() {
        return (
            <div className="container">
                <div className="col ">
                    <div className="row-sm">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                <img src={Tomatos} width='250' heigt='250' />
                                </div>
                                <div className="col-sm align-self-center">
                                    <h1><div id="title">Titel</div></h1>
                                    <div>
                                        Price: <span id="price"> 5.90</span> <br/>
                                        Remaining stock: <span id="stock"> 2</span>
                                    </div>
                                    <button className="btn btn-success"onClick={this.UpdateData}> UpdateData </button>
                                    <NotifyWhenInStock/>
                                    {/* <p><button type="button" class="btn btn-success" onClick={this.NotificationStock}>Notify when in Stock</button> </p>    */}                               
                                    {this.state.isProductInWishlist && <button className="btn btn-secondary" onClick={this.deleteFromWhishListClicked}>In wishlist</button>}
                                    {!this.state.isProductInWishlist && <button className="btn btn-primary" onClick={this.addToWhishListClicked}>In wishlist</button>}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className ="row-sm">
                        <h3>Product Description</h3>
                        <p id="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                    </div>    
                    
                    
                </div>
            </div>
          
                
            
        )
    }
}



export default ProductComponent;