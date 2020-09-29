import React, {Component } from 'react'
import WishListService from '../API/WishListService';
import NotifyWhenInStock from './NotifyWhenInStock';
import ProductService from '../API/ProductService.js'

/**
 * This component shows one product 
 */
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

    /**
     * Method which handles sucessful responses
     * @param {object} res object with all data of the product
     */
    handleSuccessfulResponse(res) {
        console.log(res.data)
        this.setState({
            data: res.data,
            isDataFetched : true
        })
    }
    
    /**
     * Method which adds a product to the WhishList
     */
    addToWhishListClicked() {
        this.setState({ isProductInWishlist: true})
        WishListService.addToWhishList(this.props.match.params.id)
    }

    /**
     * Method which deletes a product from the WhishList
     */
    deleteFromWhishListClicked() {
        this.setState({ isProductInWishlist: false})
        WishListService.deleteFromWishList(this.props.match.params.id)
    }

    render() {
        const backupImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAM1BMVEXf39+goKDe3t6dnZ3i4uKmpqabm5vS0tLV1dW3t7fLy8vDw8O6urqqqqqioqLKysqwsLA0gLe7AAAE+ElEQVR4nO2di3KDIBBFCaB5iv7/15aLihCNtcmAKd470+Yh4npcloVIIuQGiS2FNlQjwoeP69lcfL6/iLaIvkoR6JeDokRfbDwlX6WQi7sP1YfWPB9PPGmxgtj2uGxcj1yvaConZzXFZoSPT7VP+84rGV9GcKPK3XMd2Y+Xz3ik/++vQ3y1liyeTjM66dDy6XSDFyI2cH5VIk9Z3B7sGNJaLrlUzeuSwzUe/ma7y/jc1ixcrloIsbV8ySKDVXc9jMiADCDGAzKANnemBYsIGBMh+gEF0Q3IAGI8YH4AEYFgQBBEALEtCDqCIAKIDBgPICIAA314DIcHIMgAIgMygMiA+QFEBGQAsS1wPhEigv6uwb1t2FtkQAYQGZABRAZkADE/wHiBEMiADCASEIQgiABi30g/gNgvkAFEBmQAkQEZQGTgGOi9bdhb9AIygDhe4GeuUHIG+nOlNTB9W9CPj3W9pDUxeUzUplZOtZUKFb6uVbzNv+3+nxPbmJxBdYLM6X2pIhgsXeONKoWB6q5vKwuD1DHRMqhv7/cJphAG6vb27jITg6QUdKUsg7e6eGdaUQwuf5cojIG+23Sg/otUlZFBUg0MpL6rv+YFTUkMahsTLYMhTzLB32pq1GD/LAwS17/AwNicyRJQv1BwDPL0C4nr7xnYmOgZ2JO6nqW83Kv11pGPQWrNGChlzhrrCbW81t/BIFdbCPzgrIcv3NTNqicUFw8mP7hOi0ovtVmJCQUzuExJo26+wg9SQxgYSN8vGP9NrvbNh/oGP8jBQIV9YxV8Ae564lRUjhQxOIUMrpEfmP0YZBgvBAyQOPuNZjpvVVV7tYWsDIy/vP22tja+MajrTc0ZlDN/0AYx8aQeuj+kvoQnbROpp8SxLD+IGJi6k26arI1PWcItwqBQMgObLnf3+8PUYQxUnXZlg/dKZmCGyfbQCRTGFE+eUdR4QcXjhQUZpdy1CLsGla9vTFz/NgauKUg4gjksAzQFKfwnc55BtniQVFv9oDcjTJ5z+kFaCPNcOQ4ECJF2Qzckj0gZxnIZx867MnAUbMpwG60JRtPHYWDP8VTXozVhYzgOA1XXXTuZcdmBQWqNcyjzmGhcxqi61t0kOvy8jhCNzxXLnUsLPcABiD+P1Xc/2VxU3/iCwegB/e8ujXZMjSEjg/TxYImBqpwHLBzdT7gXxUBFc6ruQTWvDjs1hqLaAsaNkR8YVb06rJwaQ1lzqtHYGQiatQUDTXYGieuftYWhIbz0AynaukQ/iO7BMK9jwbCLm1w1hcWDWzgi/A2Bm0ZQp7zzykk1tYXxvuVfELjP4FoUrkRJDFo7Mj7fB20ZoegbSuJZKQzceMEvZIiO/no/3adQp0L6BTAIftZ3o/qyuHupCD9oewcIbjwY3GFpkUroLFpn8YMc8eBxe1ulMPhs/YIpIh58KDIogUFnqk/13+OB7QyWlyz68P8F6xtTH2D2s/Phr6wvbX9+L7mBXPMt/sWa7+QW/gMGycXvEiUDiAzIACIDMoDIgPkBRAT0A4jfj0QGELsFMoDIgH0jRAZkALFvdDHx8BDYL0R3Ch9WbAtsCxAZkAFEBpxHgjivTAYQGTAeQBw30g8gMiADiAw4eQCRAdsCRARkAJEB4wHEcSMZQGTAeADRDcgAIgPmSE6EQASCDCAyYI4EEQH9AMqzuv67RQRsCxARkIHVD9yhN0e3gqRsAAAAAElFTkSuQmCC"
        if (!this.state.isDataFetched) return null;
        return (
            <div className="container">
                <div className="col ">
                    <div className="row-sm">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                <img src={'data:image/jpeg;base64,'+this.state.data.picture} onError={(e)=>{e.target.onerror = null; e.target.src=backupImg}} width='450' heigt='350' alt={this.state.data.name}/>
                                </div>
                                <div className="col-sm align-self-center">
                                    <h1>{this.state.data.name}</h1>
                                    <div>
                                        <h4>Price: {this.state.data.price}</h4>
                                        Remaining stock: {this.state.data.remainingStock}<br/>
                                        Limitations: {this.state.data.limitations}
                                    </div>
                                    <NotifyWhenInStock/>
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