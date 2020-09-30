import React, {Component } from 'react'
import StoreService from '../API/StoreService.js'
import AuthentificationService from '../API/AuthenticationService.js'

/**
 * This component is responsible for all the settings of stores 
 */
class StoreSettingComponent extends Component {
     constructor(props) {
        super(props)
        this.state = {
            storeName: '',
            streetName: '',
            houseNumber: '',
            district: '',
            postalCode: '',
            country: '',
            openingHours: '',
            customerService: '',
            phoneNumber: '',
            email: '',
            importantNotifications: '',
            limitations: '',
            isDataFetched: false
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    } 
    componentDidMount(){
        StoreService.getStoreInformation(this.props.match.params.id)
            .then(response => this.handleSuccessfulResponse(response))
            .catch( () => alert("REST API Error"))
    }

    /**
     * Method which handles sucessful responses
     * @param {object} res object with all settings of the shop
     */
    handleSuccessfulResponse(res) {
        console.log(res.data)
        if (res.data.address!==null){
            this.setState({address: null})
            this.setState({
                streetName: res.data.address.streetName,
                houseNumber: res.data.address.houseNumber,
                district: res.data.address.district,
                postalCode: res.data.address.postalCode,
                country: res.data.address.country
            })
        }
        this.setState({
            storeId: res.data.storeId,
            storeName: res.data.storeName,
            openingHours: res.data.openingHours,
            customerService: res.data.customerService,
            phoneNumber: res.data.phoneNumber,
            email: res.data.email,
            importantNotifications: res.data.importantNotifications,
            limitations: res.data.limitations,
            products: res.data.products,
            isDataFetched : true
        })
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

    /**
     *  Method which handles if data should be saved
     */
    handleSave(){
        let newData = this.state
        newData.address = 
         {
            streetName: this.state.streetName,
            houseNumber: this.state.houseNumber,
            district: this.state.district,
            postalCode: this.state.postalCode,
            country: this.state.country
        }
        delete newData.streetName;
        delete newData.houseNumber;
        delete newData.district;
        delete newData.postalCode;
        delete newData.country;
        delete newData.isDataFetched;
        StoreService.updateStoreInformation(AuthentificationService.getLoggedInUsername(), this.props.match.params.id, newData)
            .then( () => alert("StoreInformation updated!"))
            .catch( () => alert("API PUT Error"))
    }
    
    render () {
        if (!this.state.isDataFetched) return null;
        return (
            <>
                <div className="jtScroll">
                    <h1>Store Settings</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm mb-2 text-left">Store Name: </div>
                            <div className="col-sm mb-2 text-left"> <input type="text" name="storeName" value={this.state.storeName} onChange={this.handleChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm mb-2 text-left">Street: </div>
                            <div className="col-sm mb-2 text-left"> <input type="text" name="streetName" value={this.state.streetName} onChange={this.handleChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm mb-2 text-left">House Number: </div>
                            <div className="col-sm mb-2 text-left"> <input type="text" name="houseNumber" value={this.state.houseNumber} onChange={this.handleChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm mb-2 text-left">District / City: </div>
                            <div className="col-sm mb-2 text-left"> <input type="text" name="district" value={this.state.district} onChange={this.handleChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm mb-2 text-left">Post Code: </div>
                            <div className="col-sm mb-2 text-left"> <input type="text" name="postalCode" value={this.state.postalCode} onChange={this.handleChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm mb-2 text-left">Country: </div>
                            <div className="col-sm mb-2 text-left"> <input type="text" name="country" value={this.state.country} onChange={this.handleChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm mb-2 text-left">Opening Hours: </div>
                            <div className="col-sm mb-2 text-left"> <input type="text" name="openingHours" value={this.state.openingHours} onChange={this.handleChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm mb-2 text-left">Customer Service: </div>
                            <div className="col-sm mb-2 text-left"> <input type="text" name="customerService" value={this.state.customerService} onChange={this.handleChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm mb-2 text-left"> Phone Number</div>
                            <div className="col-sm mb-2 text-left"> <input type="number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm mb-2 text-left"> Email:</div>
                            <div className="col-sm mb-2 text-left"> <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm mb-2 text-left"> Important Notifications:</div>
                            <div className="col-sm mb-2 text-left"> <input type="text" name="importantNotifications" value={this.state.importantNotifications} onChange={this.handleChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm mb-2 text-left"> Limitations:</div>
                            <div className="col-sm mb-2 text-left"> <input type="text" name="limitations" value={this.state.limitations} onChange={this.handleChange}/></div>
                        </div>
                    </div>  
                    <div className="container">
                        <button className="btn btn-success mr-2"onClick={this.handleSave}> Save </button>
                        <button className="btn btn-secondary"onClick={this.props.history.goBack}> Cancel </button>
                    </div>
                </div>    
            </>
        );
    }
}
export default StoreSettingComponent;