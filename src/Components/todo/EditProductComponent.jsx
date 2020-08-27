import React, {Component } from 'react'
import TomatoTestComponent from './TomatoTestComponent.jsx'
import HelloWordService from '../../API/todo/HelloWordService.js'

class EditProductComponent extends Component {
    constructor(props) {
        super (props)
        this.state = {
            productId: this.props.match.params.id,
            category: null,
            picture: null,
            name: "Default",
            price: 4.90,
            retailStore: null,
            description: "Hier steht die Beschreibung :-)",
            limitations: "Feb 45",
            remainingStock: 5,

            data: null,
            isDataFetched: false
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.encodeImageFileAsURL = this.encodeImageFileAsURL.bind(this);
        this.handleDelete = this.handleDelete.bind(this)
    }
    componentDidMount(){
        HelloWordService.getProductInformation(this.props.match.params.id)
            .then(response => this.handleSuccessfulResponse(response))
            .catch(response => alert("REST API Error"))
    }
    handleSuccessfulResponse(res) {
        console.log(res.data)
        this.setState({
            productId: res.data.productId,
            category: res.data.category,
            picture: res.data.picture,
            name: res.data.name,
            price: res.data.price,
            retailStore: res.data.retailStore,
            description: res.data.description,
            limitations: res.data.limitations,
            remainingStock: res.data.remainingStock,

            isDataFetched: true
        })
    }
    handleChange(event) {
        this.setState({
            [event.target.name]
                :event.target.value
        })
    }
    
    handleSave(event) {
        this.setState({picture: document.getElementById("imgTest").innerHTML}, function () {
            let updateProduct = {
                productId: this.props.match.params.id,
                name: this.state.name,
                price: this.state.price,
                description: this.state.description,
                limitations: this.state.limitations,
                remainingStock: this.state.remainingStock,
            }
            
            
            
            console.log(updateProduct);
            HelloWordService.updateProductInformation(updateProduct, this.props.match.params.id)
                .then(response => alert("Product updated!"))
                .catch(response => alert("API PUT Error"))
        });
    }
    handleDelete(){
        if (window.confirm("Do you really want to delete this Product?")) {
            console.log("You pressed OK!");
            HelloWordService.deleteProduct(this.props.match.params.id)
                .then(response => {
                    alert(`Product ${this.props.match.params.id} is deleted!`)
                    this.props.history.goBack()
                })
                .catch(response => alert("An Error occured while deleting, please try again."))
          } else {
            console.log("You pressed Cancel!")
          }
    }
    encodeImageFileAsURL() {        
        var filesSelected = document.getElementById("inputFileToLoad").files;
	    console.log(filesSelected);
        
        if (filesSelected.length > 0) {
          var fileToLoad = filesSelected[0];
          var fileReader = new FileReader();
    
          fileReader.onload = function(fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result; // <--- data: base64
            
            var newImage = document.createElement('img');
            newImage.src = srcData;
            document.getElementById("imgTest").innerHTML = newImage.outerHTML;
            //console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
          }
          fileReader.readAsDataURL(fileToLoad);
        }
    }
    
    render(){
        if (!this.state.isDataFetched) return null;
        return (
            <>
                <h1>Edit Product #{this.props.match.params.id}</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="row">
                                <div className="col-sm mb-2 text-left">Title: </div>
                                <div className="col-sm mb-2 text-left"> <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/></div>
                            </div>
                            <div className="row">
                                <div className="col-sm mb-2 text-left">Price: </div>
                                <div className="col-sm mb-2 text-left"> <input type="text" name="price" value={this.state.price} onChange={this.handleChange}/></div>
                            </div>
                            <div className="row">
                                <div className="col-sm mb-2 text-left">Stock: </div>
                                <div className="col-sm mb-2 text-left"> <input type="text" name="remainingStock" value={this.state.remainingStock} onChange={this.handleChange}/></div>
                            </div>
                            <div className="row">
                                <div className="col-sm mb-2 text-left">Limitations: </div>
                                <div className="col-sm mb-2 text-left"> <input type="text" name="limitations" value={this.state.limitations} onChange={this.handleChange}/></div>
                            </div>
                            <div className="row">
                                <div className="col-sm mb-2 text-left"> Product Description:</div>
                                <div className="col-sm mb-2 text-left"> <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/></div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="col">
                                <div id="imgTest" >
                                    <TomatoTestComponent />
                                </div>
                                <input id="inputFileToLoad" type="file" onChange={this.encodeImageFileAsURL}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-2">
                    <button className="btn btn-success mr-2"onClick={this.handleSave}> Save </button>
                    <button className="btn btn-secondary"onClick={this.props.history.goBack}> Cancel </button>
                    <button className="btn btn-success mr-2"onClick={this.handleDelete}> Delete </button>
                </div> 
            </>
        )
    }
}

export default EditProductComponent;
