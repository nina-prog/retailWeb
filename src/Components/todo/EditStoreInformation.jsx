import React, {Component } from 'react'
//import Tomatos from '../../img/Tomatos.jpeg'
import HelloWordService from '../../API/todo/HelloWordService';
//hier muss noch TodoDataService oder so importiert werden, damit wir 

// more Information: https://getbootstrap.com/docs/4.0/components/input-group/

class EditStoreInformation extends Component {
    constructor(props) {
        super (props)
        this.state = JSON.parse(HelloWordService.retrieveStoreInformation(1));
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]
                :event.target.value
        })
    }
  
    handleSave(event) {
           HelloWordService.updateStoreInformation(JSON.stringify(this.state), this.state.product_id)
            .then(response => alert("Successfully saved!!!"))
         
        }
        
    render() {
        return (
            <>
                <h1>Edit Store Information</h1>

                
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="col">
                                <div className="row-sm mb-2 text-left">Name: </div>
                                <div className="row-sm mb-2 text-left">Address: </div>
                                <div className="row-sm mb-2 text-left">openingHours: </div>
                                <div className="row-sm mb-2 text-left"> restrictions:</div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="col">
                                <div className="row-sm mb-2 text-left"> <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/></div>
                                <div className="row-sm mb-2 text-left"> <input type="text" name="address" value={this.state.address} onChange={this.handleChange}/></div>
                                <div className="row-sm mb-2 text-left"> <input type="text" name="openingHours" value={this.state.openingHours} onChange={this.handleChange}/></div>
                                <div className="row-sm mb-2 text-left"> <input type="text" name="restrictions" value={this.state.restrictions} onChange={this.handleChange}/></div>
                            </div>
                        </div>
                       
                    </div>
                    
                    
                    
                </div>
                <div className="container">
                    
                <button className="btn btn-success mr-2"onClick={this.handleSave}> Save </button>
                    <button className="btn btn-secondary"onClick={this.loginClicked}> Cancel </button>
                </div>

            </>
        )
    }
}

export default EditStoreInformation;
