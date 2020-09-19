import React, {Component } from 'react'
import StoreService from '../../API/todo/StoreService.js'

class StoreSettingComponent extends Component {
     constructor(props) {
        super(props)
        this.state = {
            
            data: null,
            isDataFetched: false
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    } 
    componentDidMount(){
        StoreService.getStoreInformation(this.props.match.params.id)
            .then(response => this.handleSuccessfulResponse(response))
            .catch(response => alert("REST API Error"))
    }
    handleSuccessfulResponse(res) {
        console.log(res.data)
        this.setState({
            data: res.data,
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
        StoreService.updateStoreInformation(this.state.data, this.props.match.params.id)
            .then(response => alert("StoreInformation updated!"))
            .catch(response => alert("API PUT Error"))
    }
    render () {
        if (!this.state.isDataFetched) return null;
        /* let productCards = this.state.data.map(product => {
            return (
                <Col sm="4" className="jtColMagin" key={product.productId}>
                    <BlockComponent  product={product} view="Edit" />
                </Col>
            )
        }); */
        
        return (
            <>
                <div className="jtScroll">
                    <h1>Store Settings</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm mb-2 text-left">Store Name: </div>
                            <div className="col-sm mb-2 text-left"> <input type="text" name="name" value={this.state.data.name} onChange={this.handleChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm mb-2 text-left">Address: </div>
                            <div className="col-sm mb-2 text-left"> <input type="text" name="price" value={this.state.data.address} onChange={this.handleChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm mb-2 text-left">Opening Hours: </div>
                            <div className="col-sm mb-2 text-left"> <input type="text" name="remainingStock" value={this.state.data.openingHours} onChange={this.handleChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm mb-2 text-left">Customer Service: </div>
                            <div className="col-sm mb-2 text-left"> <input type="text" name="limitations" value={this.state.data.customerService} onChange={this.handleChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm mb-2 text-left"> Phone Number</div>
                            <div className="col-sm mb-2 text-left"> <input type="text" name="description" value={this.state.data.phoneNumber} onChange={this.handleChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm mb-2 text-left"> Email:</div>
                            <div className="col-sm mb-2 text-left"> <input type="text" name="description" value={this.state.data.email} onChange={this.handleChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm mb-2 text-left"> Important Notifications:</div>
                            <div className="col-sm mb-2 text-left"> <input type="text" name="description" value={this.state.data.importantNotifications} onChange={this.handleChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col-sm mb-2 text-left"> Limitations:</div>
                            <div className="col-sm mb-2 text-left"> <input type="text" name="description" value={this.state.data.limitations} onChange={this.handleChange}/></div>
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