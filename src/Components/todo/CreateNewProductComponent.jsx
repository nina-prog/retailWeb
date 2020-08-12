import React, {Component } from 'react'
import{Link} from 'react-router-dom'
import HelloWorldService from '../../API/todo/HelloWordService.js'

class CreateNewProductComponent extends Component {
    constructor(props) {
        super(props)
        this.retriveWelcomeMessage = this.retriveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.state = {
             isNewProductClicked: false
        }
        this.handleClickNewProduct = this.handleClickNewProduct.bind(this);

    }
    handleClickNewProduct (event) {
        this.setState({ isNewProductClicked: true })
    }
    
    render () {
        return (
            <>
                <div className="container">
                    <button type="button" className="btn btn-primary mr-2 mb-2" onClick={this.handleClickNewProduct}>New Product</button>
                    {this.state.isNewProductClicked && <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>}
                    {this.state.isNewProductClicked && <button type="button" className="btn btn-success ml-2 mb-2" >Create New Product</button>}
                </div>
            </>
        )
        
    }
    retriveWelcomeMessage(){
        HelloWorldService.executeHelloWorldService()
        .then(response => this.handleSuccessfulResponse(response))
        .catch(response => alert("REST API Error"))
    }

    handleSuccessfulResponse(response){
        this.setState({welcomeMessage: response.data})
    }
}

export default CreateNewProductComponent;