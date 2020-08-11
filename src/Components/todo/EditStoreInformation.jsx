import React, {Component } from 'react'
import Tomatos from '../../img/Tomatos.jpeg'
//hier muss noch TodoDataService oder so importiert werden, damit wir 

// more Information: https://getbootstrap.com/docs/4.0/components/input-group/

class EditStoreInformation extends Component {
    constructor(props) {
        super (props)
        this.state = {
            Name: 'ALDI', //das muss noch anders bennen oder so
            Adress: 'Musterstraße',
            Info1: 'No Info',
            Info2: 'No Info'
        }

        this.handleChange = this.handleChange.bind(this)
        this.saveClicked = this.saveClicked.bind(this)
        
    }


//Methode, was passiert, wenn wir neue Produkt Infos hinzufügen
//übergebe ich dem nicht noch mehr als eine id?

saveClicked(id) {       
    console.log('update'+ id)
    this.props.history.push(`/EditStoreInformation/${this.state.username}`)


}

    handleChange(event) {
        this.setState({
            [event.target.name]
                :event.target.value
        })
    }
  
        
        
  
  

    render(){
        return (
            <>
                <h1>Edit Store Information</h1>

                
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="col">
                                <div className="row-sm mb-2 text-left">Name: </div>
                                <div className="row-sm mb-2 text-left">Adress: </div>
                                <div className="row-sm mb-2 text-left">Info1: </div>
                                <div className="row-sm mb-2 text-left"> Info2:</div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="col">
                                <div className="row-sm mb-2 text-left"> <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/></div>
                                <div className="row-sm mb-2 text-left"> <input type="text" name="price" value={this.state.price} onChange={this.handleChange}/></div>
                                <div className="row-sm mb-2 text-left"> <input type="text" name="stock" value={this.state.stock} onChange={this.handleChange}/></div>
                                <div className="row-sm mb-2 text-left"> <input type="text" name="stock" value={this.state.description} onChange={this.handleChange}/></div>
                            </div>
                        </div>
                       
                    </div>
                    
                    
                    
                </div>
                <div className="container">
                    
                    <button className="btn btn-success mr-2"onClick={() => this.saveClicked(EditStoreInformation.id)}> Save </button>
                    <button className="btn btn-secondary"onClick={this.loginClicked}>  Cancel </button>
                </div> 

             




                
            </>
        )
    }
}

export default EditStoreInformation;
