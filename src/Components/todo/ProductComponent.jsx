import React, {Component } from 'react'
import Tomatos from '../../img/Tomatos.jpeg'
import WishListService from './WishListService';

class ProductComponent extends Component {

    constructor(props) {
        super (props)
        this.handleAddToWishList = this.handleAddToWishList.bind(this);


    }

    handleAddToWishList(event) {
        WishListService.addToWhishList()
      
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
                                    <button className="btn btn-primary mu-1" onClick={this.handleAddToWishList}> Add To WishList </button>
                                    <p><button type="button" class="btn btn-success">Notify when in Stock</button> </p>
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