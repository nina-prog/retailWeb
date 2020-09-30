import React, {Component } from 'react'
import StoreService from '../API/StoreService.js'
import StoreComponent from './StoreComponent';

/**
 * This component is showing the store infomation
 */
class StoreInfoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            products: null,
            isProductInWishlist: false,
            isProductFetched: false
        }
       this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    }

    componentDidMount(){
        StoreService.getStoreInformation(this.props.match.params.id)
            .then(response => this.handleSuccessfulResponse(response))
            .catch(response => alert("REST API Error"))
    }
    /**
     * Method which handles sucessful responses
     * @param {object} res object with all data of the shop
     */
    handleSuccessfulResponse(res) {
        console.log(res.data)
        this.setState({
            data: res.data,
            isDataFetched : true
        })
    }

    render() {
        if (!this.state.isDataFetched) return null;
        return (
            <div className="jtScroll">
                <div className="container">
                    <h1>{this.state.data.storeName}</h1>
                    Store Address:  {this.state.data.address.streetName} {this.state.data.address.houseNumber}, {this.state.data.address.postalCode} {this.state.data.address.district}, {this.state.data.address.country} <br/>
                    openingHours: {this.state.data.openingHours}<br/>
                    customer Serivce: {this.state.data.customerService}<br/>
                    phone: {this.state.data.phoneNumber}<br/>
                    email: {this.state.data.email}<br/>
                    important Notification: {this.state.data.importantNotifications}<br/>
                    limitations: {this.state.data.limitations}<br/>
                </div>
                <div>
                    <StoreComponent />
                </div>
            </div>
        )
    }
}
export default StoreInfoComponent;