import React, {Component } from 'react'
import ProductService from '../API/ProductService.js'
import UserService from '../API/UserService.js'
import AuthentificationService from '../API/AuthenticationService.js'
import 'react-dropdown/style.css'

/**
 * This component is responsible to edit procuts
 */

class EditProductComponent extends Component {
    constructor(props) {
        super (props)
        this.state = {
            productId: this.props.match.params.id,
            category: null,
            picture: null,
            name: null,
            price: null,
            description: null,
            limitations: null,
            remainingStock: null,
            allCategories: null,
            storeId: null,

            isDataFetched: false,
            categoriesFetched: false
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.encodeImageFileAsURL = this.encodeImageFileAsURL.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }
    componentDidMount(){
        ProductService.getProductInformation(this.props.match.params.id)
            .then(response => this.handleSuccessfulResponse(response))
            .catch(response => alert("REST API Error"))
        UserService.getCategories()
            .then(response => {
                this.setState({
                    allCategories: response.data,
                    categoriesFetched: true
                }, function(){console.log(this.state.allCategories)})
            })
            .catch(() => alert("Couln't load Categories."))
    }

    /**
     * Method which handles successful responses
     * @param {object} res object with new data
     */

    handleSuccessfulResponse(res) {
        console.log(res.data)
        this.setState({
            storeId: res.data.storeId, 
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
        if (res.data.storeId===null){
            this.setState({storeId: 1})
        }
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

    handleOptionChange(event){
        this.setState({category: event.target.value}, function(){
            console.log('Option value: '+ this.state.category)
        })
    }
    /**
     * Method which encodes the image in base64 and shows the loaded image
     */

    encodeImageFileAsURL() {        
        var filesSelected = document.getElementById("inputFileToLoad").files;
	    console.log(filesSelected);
        
        if (filesSelected.length > 0) {
          var fileToLoad = filesSelected[0];
          var fileReader = new FileReader();
    
          fileReader.onload = function(fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result; 
            var newImage = document.createElement('img');
            newImage.src = srcData;
            newImage.className="img-fluid";
            document.getElementById("imgTest").innerHTML = newImage.outerHTML;
          }
          fileReader.readAsDataURL(fileToLoad);
        }
    }

    /**
     * Method which handles if new data should be saved
     * @param {event} event if new data is being saved
     */

    handleSave(event) {
        this.setState({picture: document.getElementById("imgTest").innerHTML}, function () {
            console.log(this.state.category)
            console.log(this.state.allCategories.findIndex((element) => element = this.state.category))
            let updateProduct = {
                category: this.state.allCategories[this.state.allCategories.findIndex((element) => element = this.state.category)],
                storeId: this.state.storeId,
                picture: this.state.picture.slice(33, this.state.picture.length-20),
                name: this.state.name,
                price: this.state.price,
                retailStore: this.state.retailStore,
                description: this.state.description,
                limitations: this.state.limitations,
                remainingStock: this.state.remainingStock
            }
            console.log(updateProduct);
            ProductService.updateProductInformation(AuthentificationService.getLoggedInUsername(), this.state.productId, updateProduct)
                .then(response => {
                    alert("Product updated!")
                    this.props.history.goBack()
                    })
                .catch(response => alert("Please fill out the form and try again!"))
        });
    }

    /**
     * Method which deletes a specific product 
     */
    handleDelete(){
        if (window.confirm("Do you really want to delete this Product?")) {
            console.log("You pressed OK!");
            ProductService.deleteProduct(AuthentificationService.getLoggedInUsername(), this.props.match.params.id)
                .then(response => {
                    alert(`Product ${this.props.match.params.id} is deleted!`)
                    this.props.history.goBack()
                })
                .catch(response => alert("An Error occured while deleting, please try again."))
          } else {
            console.log("You pressed Cancel!")
          }
    }
    
    
    render(){
        if (!this.state.isDataFetched) return null;
        if (!this.state.categoriesFetched) return null;
        let viewCategory = this.state.allCategories.map(item => {
            return(
                <option key={item.categoryId} value={item.categoryId}> {item.catName} </option>
            )
        });
        const backupImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAM1BMVEXf39+goKDe3t6dnZ3i4uKmpqabm5vS0tLV1dW3t7fLy8vDw8O6urqqqqqioqLKysqwsLA0gLe7AAAE+ElEQVR4nO2di3KDIBBFCaB5iv7/15aLihCNtcmAKd470+Yh4npcloVIIuQGiS2FNlQjwoeP69lcfL6/iLaIvkoR6JeDokRfbDwlX6WQi7sP1YfWPB9PPGmxgtj2uGxcj1yvaConZzXFZoSPT7VP+84rGV9GcKPK3XMd2Y+Xz3ik/++vQ3y1liyeTjM66dDy6XSDFyI2cH5VIk9Z3B7sGNJaLrlUzeuSwzUe/ma7y/jc1ixcrloIsbV8ySKDVXc9jMiADCDGAzKANnemBYsIGBMh+gEF0Q3IAGI8YH4AEYFgQBBEALEtCDqCIAKIDBgPICIAA314DIcHIMgAIgMygMiA+QFEBGQAsS1wPhEigv6uwb1t2FtkQAYQGZABRAZkADE/wHiBEMiADCASEIQgiABi30g/gNgvkAFEBmQAkQEZQGTgGOi9bdhb9AIygDhe4GeuUHIG+nOlNTB9W9CPj3W9pDUxeUzUplZOtZUKFb6uVbzNv+3+nxPbmJxBdYLM6X2pIhgsXeONKoWB6q5vKwuD1DHRMqhv7/cJphAG6vb27jITg6QUdKUsg7e6eGdaUQwuf5cojIG+23Sg/otUlZFBUg0MpL6rv+YFTUkMahsTLYMhTzLB32pq1GD/LAwS17/AwNicyRJQv1BwDPL0C4nr7xnYmOgZ2JO6nqW83Kv11pGPQWrNGChlzhrrCbW81t/BIFdbCPzgrIcv3NTNqicUFw8mP7hOi0ovtVmJCQUzuExJo26+wg9SQxgYSN8vGP9NrvbNh/oGP8jBQIV9YxV8Ae564lRUjhQxOIUMrpEfmP0YZBgvBAyQOPuNZjpvVVV7tYWsDIy/vP22tja+MajrTc0ZlDN/0AYx8aQeuj+kvoQnbROpp8SxLD+IGJi6k26arI1PWcItwqBQMgObLnf3+8PUYQxUnXZlg/dKZmCGyfbQCRTGFE+eUdR4QcXjhQUZpdy1CLsGla9vTFz/NgauKUg4gjksAzQFKfwnc55BtniQVFv9oDcjTJ5z+kFaCPNcOQ4ECJF2Qzckj0gZxnIZx867MnAUbMpwG60JRtPHYWDP8VTXozVhYzgOA1XXXTuZcdmBQWqNcyjzmGhcxqi61t0kOvy8jhCNzxXLnUsLPcABiD+P1Xc/2VxU3/iCwegB/e8ujXZMjSEjg/TxYImBqpwHLBzdT7gXxUBFc6ruQTWvDjs1hqLaAsaNkR8YVb06rJwaQ1lzqtHYGQiatQUDTXYGieuftYWhIbz0AynaukQ/iO7BMK9jwbCLm1w1hcWDWzgi/A2Bm0ZQp7zzykk1tYXxvuVfELjP4FoUrkRJDFo7Mj7fB20ZoegbSuJZKQzceMEvZIiO/no/3adQp0L6BTAIftZ3o/qyuHupCD9oewcIbjwY3GFpkUroLFpn8YMc8eBxe1ulMPhs/YIpIh58KDIogUFnqk/13+OB7QyWlyz68P8F6xtTH2D2s/Phr6wvbX9+L7mBXPMt/sWa7+QW/gMGycXvEiUDiAzIACIDMoDIgPkBRAT0A4jfj0QGELsFMoDIgH0jRAZkALFvdDHx8BDYL0R3Ch9WbAtsCxAZkAFEBpxHgjivTAYQGTAeQBw30g8gMiADiAw4eQCRAdsCRARkAJEB4wHEcSMZQGTAeADRDcgAIgPmSE6EQASCDCAyYI4EEQH9AMqzuv67RQRsCxARkIHVD9yhN0e3gqRsAAAAAElFTkSuQmCC"
        let imgSrc = 'data:image/jpeg;base64,'+ this.state.picture;
        if (imgSrc === undefined){
            imgSrc = backupImg
        }
        if (imgSrc === null){
            imgSrc = backupImg
        }
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
                                <div className="col-sm mb-2 text-left">Category: </div>
                                <div className="col-sm mb-2 text-left"> 
                                    <select value={this.state.category} onChange={this.handleOptionChange}>
                                        {viewCategory}
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm mb-2 text-left"> Product Description:</div>
                                <div className="col-sm mb-2 text-left"> <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/></div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="col">
                                <div id="imgTest" >
                                    <img src={imgSrc} onError={(e)=>{e.target.onerror = null; e.target.src=backupImg}} width='250' heigt='250' alt={this.state.name} />
                                </div>
                                <input id="inputFileToLoad" type="file" accept="image/jpeg" onChange={this.encodeImageFileAsURL}/>
                                <p>Maximum image size 2MB</p>
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
