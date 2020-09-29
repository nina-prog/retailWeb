import React, {Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import  WishListService from '../API/WishListService';
import ProductService from '../API/ProductService.js'
import BlockComponent from './BlockComponent'

/**
 * This component is responsible for the WishList
 */

class WishListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            isDataFetched: false,
            arrayIsEmpty: true,
        }
        this.addToWhishListClicked = this.addToWhishListClicked.bind(this)
        this.deleteFromWhishListClicked = this.deleteFromWhishListClicked.bind(this)
        this.deleteWhishListClicked = this.deleteWhishListClicked.bind(this)
        this.handleChange = this.handleChange.bind(this)
    
    }  
    componentDidMount(){
        let response = WishListService.getProductsfromWishlist() 
        let arrayWithProducts = response
        if (arrayWithProducts!==null){
            this.setState({arrayIsEmpty: false})
            this.setState({ data: new Array(arrayWithProducts.length-1)}, function () {
                for (let i=1; i < arrayWithProducts.length; i++){
                    ProductService.getProductInformation(arrayWithProducts[i])
                        .then((response)=> {
                            let data = [...this.state.data];
                            data[i-1] = response.data;
                            this.setState({data}, function (){
                                if (i===(arrayWithProducts.length-1)){
                                    this.setState({isDataFetched: true}, function(){console.log(this.state.isDataFetched)}) 
                                }
                            })
                        })
                        .catch(response => alert("REST API Error"))
                }
            });
        }
    }

    /**
    * This Method gets products from the WishList
    */

    getProductsfromWishlistClicked () {
        console.log(this.state.data)
    } 

    /**
     * This Method adds products to the WishList
     */
    addToWhishListClicked() {
        WishListService.addToWhishList(this.state.product_id)
    }

    /**
     * This Method delets products from the WishList
     */

    deleteFromWhishListClicked() {
        WishListService.deleteFromWishList(this.state.product_id)
    }

    /**
     * This Method deletes the whole WishList
     */
    deleteWhishListClicked() {
        WishListService.deleteWishList()
    } 

     /**
     * Method which handles changes 
     *  @param {event} event event if something changes 
     */
    handleChange(event) {
        this.setState({
            [event.target.name]
                :event.target.value
        })
    }
      
      render () {
        if (!this.state.arrayIsEmpty) {
            if (this.state.isDataFetched) {
                let productCards = this.state.data.map(product => {
                    return (
                        <Col sm="4" key={product.productId}>
                            <BlockComponent  product={product} />
                            {/* {console.log(product)} */}
                        </Col>
                    )
                });
                return (
                    <div> 
                        <h1>Wishlist</h1>
                        <div className="container">
                          <div className="container">
                              {/* <input type="text" name="product_id" value={this.state.product_id} onChange={this.handleChange}/>   
                              <button className="btn btn-success"onClick={this.addToWhishListClicked}> addToWhishList </button>
                              <button className="btn btn-success"onClick={this.deleteFromWhishListClicked}> Delete from Whish List </button>
                              <button className="btn btn-success"onClick={this.deleteWhishListClicked}> Delete Whish List </button>
                              <button className="btn btn-success"onClick={this.getProductsfromWishlistClicked}> Get Items from Wishlist </button> */}
                              <button className="btn btn-info"onClick={() => window.print()}>PRINT</button>
                          </div>
                          <div className="overflow-auto">
                              <Container>
                                  <Row>
                                      {productCards}
                                  </Row>
                              </Container>
                          </div>  
                        </div>
                    </div> 
                )
            } else {
                return null;
            }
        } else {
            return (
                <>
                    <h3>Wishlist is empty!</h3>
                    <div className="container">
                        <input type="text" name="product_id" value={this.state.product_id} onChange={this.handleChange}/>   
                        <button className="btn btn-success"onClick={this.addToWhishListClicked}> addToWhishList </button>
                    </div>
                </>
            )
        } 
      }
  }

export default WishListComponent;