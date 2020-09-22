import React, {Component } from 'react'
import StoreService from '../../API/todo/StoreService.js'
import AuthentificationService from '../../API/todo/AuthenticationService.js'

class StoreSettingComponent extends Component {
     constructor(props) {
        super(props)
        this.state = {
            storeName: '',
            address: {
                streetName:"Kreuzstraße",
                houseNumber:"29",
                district: "Karlsruhe",
                postalCode:"76133",
                country:"Germany"
              },
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
    handleSuccessfulResponse(res) {
        console.log(res.data)
        this.setState({
            /* data: res.data, */
            storeName: res.data.storeName,
            address: res.data.address,
            openingHours: res.data.openingHours,
            customerService: res.data.customerService,
            phoneNumber: res.data.phoneNumber,
            email: res.data.email,
            importantNotifications: res.data.importantNotifications,
            limitations: res.data.limitations,
            isDataFetched : true
        })
    }
    handleChange(event) {
        this.setState({
            [event.target.name]
                :event.target.value
        })
    }
    handleSave(){
        let newData = this.state
        delete newData.isDataFetched;
        console.log(newData)
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
                            <div className="col-sm mb-2 text-left">Address: </div>
                            <div className="col-sm mb-2 text-left"> <input type="text" name="address.streetName" value={this.state.address.streetName} onChange={this.handleChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm mb-2 text-left">Address: </div>
                            <div className="col-sm mb-2 text-left"> <input type="text" name="address.houseNumber" value={this.state.address.houseNumber} onChange={this.handleChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm mb-2 text-left">Address: </div>
                            <div className="col-sm mb-2 text-left"> <input type="text" name="address.district" value={this.state.address.district} onChange={this.handleChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm mb-2 text-left">Address: </div>
                            <div className="col-sm mb-2 text-left"> <input type="text" name="address.postalCode" value={this.state.address.postalCode} onChange={this.handleChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm mb-2 text-left">Address: </div>
                            <div className="col-sm mb-2 text-left"> <input type="text" name="address.country" value={this.state.address.country} onChange={this.handleChange}/></div>
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