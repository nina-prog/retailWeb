import React, {Component } from 'react'
import Tomatos from '../../img/Tomatos.jpeg'
import WishListService from './WishListService';

class ProductComponent extends Component {

    constructor(props) {
        super (props)
        this.state = {
            productId: 1,
            category: null,
            picture: null,
            name: 'Cucumber',
            price: null,
            retailStore: null,
            description: `This is the description of a cucumber. It is realy tasty and you gonne like it. It's fresh. Come and buy it today!`,
            limitations: 0.99,
            remainingStock: null,
            
            
            
            product_id: '1',
            isWishlistOn: true
        }
        
        



        this.addToWhishListClicked = this.addToWhishListClicked.bind(this);
        this.deleteFromWhishListClicked = this.deleteFromWhishListClicked.bind(this);
        this.deleteWhishListClicked = this.deleteWhishListClicked.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //this.handleClick = this.handleClick.bin(this);

    }

   // handleClick() {
     //   this.setState( state=> ({
    //        isWishlistOn: !this.state.isWishlistOn
    //    }));

   // }


    handleChange(event) {
        this.setState({
            [event.target.name]
                :event.target.value
        })
    }

        addToWhishListClicked() {
            WishListService.addToWhishList(this.state.product_id)
        }

        deleteFromWhishListClicked() {
            WishListService.deleteFromWishList(this.state.product_id)
        }

        deleteWhishListClicked() {
            WishListService.deleteWishList()
            document.getElementById("title").innerHTML = this.state.name;
            document.getElementById("price").innerHTML = this.state.price;
            document.getElementById("description").innerHTML = this.state.description;
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
                                    <div id="price">Price: 5.90</div>
                                    <input type="text" name="product_id" value={this.state.product_id} onChange={this.handleChange}/>
                                    <button className="btn btn-success"onClick={this.addToWhishListClicked}> addToWhishList </button>
                                    <button className="btn btn-success"onClick={this.deleteFromWhishListClicked}> Delete from Whish List </button>
                                    <button className="btn btn-success"onClick={this.deleteWhishListClicked}> Delete Whish List </button>
                                    <p><button type="button" class="btn btn-success">Notify when in Stock</button> </p>
                                 
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