import React, {Component } from 'react'
import TomatoTestComponent from './TomatoTestComponent.jsx'
import HelloWorldService from '../../API/todo/HelloWordService.js'

// more Information: https://getbootstrap.com/docs/4.0/components/input-group/

class EditProductComponent extends Component {
    constructor(props) {
        super (props)
        this.state = {
            product_id: '1',
            store_id: '1',
            title: 'Tomaten',
            price: '5.90',
            stock: '2',
            description: "Hier steht die Beschreibung :-)",
            imgSrc: 'Hi'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.encodeImageFileAsURL = this.encodeImageFileAsURL.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]
                :event.target.value
        })
    }
    
    handleSave(event) {
        this.setState({imgSrc: document.getElementById("imgTest").innerHTML}, function () {
            //console.log(this.state.imgSrc);
            HelloWorldService.updateProductInformation(JSON.stringify(this.state), this.state.product_id)
            .then(response => alert("Successfully saved!"))
            //.catch()
        });

        
        
        


        /* const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.selectedFile.name);
        axios.post('http://localhost:8082/fileUpload') */
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
            
            //console.log(this.state.imgSrc);
            //console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
          }
          fileReader.readAsDataURL(fileToLoad);
        }
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
                        <div className="col-sm" >
                            <div id="imgTest" >
                                <TomatoTestComponent />
                            </div>
                            <input id="inputFileToLoad" type="file" onChange={this.encodeImageFileAsURL}/>
                            
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

export default EditProductComponent;
