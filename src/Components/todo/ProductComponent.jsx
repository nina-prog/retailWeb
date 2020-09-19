import React, {Component } from 'react'
import Tomatos from '../../img/Tomatos.jpeg'
import WishListService from '../../API/todo/WishListService';
import NotifyWhenInStock from './NotifyWhenInStock';
import ProductService from '../../API/todo/ProductService.js'
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
            
            data: null,
            isProductInWishlist: false
        }
        this.addToWhishListClicked = this.addToWhishListClicked.bind(this);
        this.deleteFromWhishListClicked = this.deleteFromWhishListClicked.bind(this);
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    }

    componentDidMount(){
        ProductService.getProductInformation(this.props.match.params.id)
            .then(response => this.handleSuccessfulResponse(response))
            .catch(response => alert("REST API Error"))

        if (WishListService.isProductInWishlist(this.props.match.params.id)){
            this.setState({isProductInWishlist: true})
        } else {
            this.setState({isProductInWishlist: false})
        }
    }
    handleChange(event) {
        this.setState({
            [event.target.name]
                :event.target.value
        })
    }

    addToWhishListClicked() {
        this.setState({ isProductInWishlist: true})
        WishListService.addToWhishList(this.props.match.params.id)
    }
    deleteFromWhishListClicked() {
        this.setState({ isProductInWishlist: false})
        WishListService.deleteFromWishList(this.props.match.params.id)
    }

    handleSuccessfulResponse(res) {
        console.log(res.data)
        this.setState({
            data: res.data,
            isDataFetched : true
        })
    }

        /* document.getElementById("title").innerHTML = response.data[0].name;
        document.getElementById("price").innerHTML = 'Price: ' + response.data[0].price;
        document.getElementById("description").innerHTML = response.data[0].description;
        document.getElementById("stock").innerHTML = response.data[0].stock; */
       

    render() {
        if (!this.state.isDataFetched) return null;
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
                                    <h1>{this.state.data.name}</h1>
                                    <div>
                                        Price: {this.state.data.price} <br/>
                                        Remaining stock: {this.state.data.name}
                                    </div>
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
                        <p id="description">{this.state.data.description} </p>
                    </div>    
                    
                    
                </div>
            </div>
          
                
            
        )
    }
}



export default ProductComponent;