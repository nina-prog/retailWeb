import React, {Component } from 'react'
import BlockComponent from './BlockComponent'
import { Container, Row, Col } from 'reactstrap';
import  WishListService from './WishListService';
import HelloWorldservice from '../../API/todo/HelloWordService.js'

class WishListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            isDataFetched: false,
            arrayIsEmpty: true
        }
        this.addToWhishListClicked = this.addToWhishListClicked.bind(this);
        this.deleteFromWhishListClicked = this.deleteFromWhishListClicked.bind(this);
        this.deleteWhishListClicked = this.deleteWhishListClicked.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getProductsfromWishlistClicked = this.getProductsfromWishlistClicked.bind(this); 
    }  
    componentDidMount(){
        let arrayWithProducts = WishListService.getProductsfromWishlist()
        if (arrayWithProducts!==null){
            this.setState({arrayIsEmpty: false})
            this.setState({ data: new Array(arrayWithProducts.length)}, function () {
                for (let i=0; i < arrayWithProducts.length; i++){
                    HelloWorldservice.getProductInformation(arrayWithProducts[i])
                        .then((response)=> {
                            console.log(response.data);
                            let data = [...this.state.data];
                            data[i] = response.data;
                            this.setState({data}, function (){
                                if (i===(arrayWithProducts.length-1)){
                                    this.setState({isDataFetched: true}, function(){console.log(this.state.isDataFetched)}) 
                                }
                            })
                        })
                }
                console.log(this.state)
            });
        } else {
            /* this.setState({
                isDataFetched: true,
                data: [{name: "Your Wishlist is empty", price: null}]
            }, function(){

            }) */
        }
        
    }
    getProductsfromWishlistClicked () {
        console.log(this.state.data)
    } 
    addToWhishListClicked() {
        WishListService.addToWhishList(this.state.product_id)
    }
    deleteFromWhishListClicked() {
        WishListService.deleteFromWishList(this.state.product_id)
    }
    deleteWhishListClicked() {
        WishListService.deleteWishList()
    } 
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
                        </Col>
                    )
                });
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