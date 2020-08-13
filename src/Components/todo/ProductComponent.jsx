import React, {Component } from 'react'
import Tomatos from '../../img/Tomatos.jpeg'
import WishListService from './WishListService';

class ProductComponent extends Component {

    constructor(props) {
        super (props)
        this.state = {
            product_id: '1',
            isProductInWishlist: false
        }
        this.addToWhishListClicked = this.addToWhishListClicked.bind(this);
        this.deleteFromWhishListClicked = this.deleteFromWhishListClicked.bind(this);
        this.deleteWhishListClicked = this.deleteWhishListClicked.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    //handleClick() {    this.setState(state => ({isWishlistOn: !state.isWishlistOn}));  }

    handleClick() {
        if (!('wishlist' in sessionStorage)) {

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
            WishListService.addToWhishList(this.state.product_id)
        }

        deleteFromWhishListClicked() {
            this.setState({ isProductInWishlist: false})
            WishListService.deleteFromWishList(this.state.product_id)
        }

        deleteWhishListClicked() {
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
                                
                                    <div >Price: </div>
                                    <p><button type="button" class="btn btn-success">Notify when in Stock</button> </p>
                                    
                                    
                                    {this.state.isProductInWishlist && <button className="btn btn-secondary" onClick={this.deleteFromWhishListClicked}>In wishlist</button>}
                                    {!this.state.isProductInWishlist && <button className="btn btn-primary" onClick={this.addToWhishListClicked}>In wishlist</button>}
                                    


                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className ="row-sm">
                        <h1>Product Description</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                    </div>    
                    
                    
                </div>
            </div>
          
                
            
        )
    }
}



export default ProductComponent;