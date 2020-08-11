import React, {Component } from 'react'
import Tomatos from '../../img/Tomatos.jpeg'
//hier muss noch TodoDataService oder so importiert werden, damit wir 

// more Information: https://getbootstrap.com/docs/4.0/components/input-group/

class EditProductComponent extends Component {
    constructor(props) {
        super (props)
        this.state = {
            title: 'Tomaten', //das muss noch anders bennen oder so
            price: '5,90',
            stock: '2',
            imgScr: '../../img/Tomatos.jpeg',
            description: "Hier steht die Beschreibung :-)"
        }

        this.handleChange = this.handleChange.bind(this)
        this.chooseImageClicked = this.chooseImageClicked.bind(this)
        this.handleFilePathChange = this.handleFilePathChange.bind(this)
        
    }


//Methode, was passiert, wenn wir neue Produkt Infos hinzufügen

updateProductInfo(id) {
    console.log
}

    handleChange(event) {
        this.setState({
            [event.target.name]
                :event.target.value
        })
    }
    chooseImageClicked() {
        
        
    }
    handleFilePathChange(event){
        var files = event.target.files;
        console.log(files);
        this.setState({imgScr:files});
    }

    render(){
        return (
            <>
                <h1>Edit Product</h1>

                
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="col">
                                <div className="row-sm mb-2 text-left">Title: </div>
                                <div className="row-sm mb-2 text-left">Price: </div>
                                <div className="row-sm mb-2 text-left">Stock: </div>
                                <div className="row-sm mb-2 text-left"> Product Description:</div>
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
                        <div className="col-sm">
                            <img src={Tomatos} alt="Produktbild" width='100' heigt='100' />
                            <input type="file" id="real-file" onChange={this.handleFilePathChange}/>
                        </div>
                    </div>
                    
                    
                    
                </div>
                <div className="container">
                    
                    <button className="btn btn-success mr-2"onClick={this.loginClicked}> Save </button>
                    <button className="btn btn-secondary"onClick={this.loginClicked}>  Cancel </button>
                </div> 

             




                
            </>
        )
    }
}

export default EditProductComponent;
