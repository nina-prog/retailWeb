import React, {Component } from 'react'
import ProductService from '../../API/todo/ProductService.js'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.retriveWelcomeMessage = this.retriveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.state = {
            welcomeMessage : ''
        }
    }
    
    render () {
        return (
            <>
                <h1>Welcome!</h1>
                {/* <div className="container">
                    Welcome {this.props.match.params.name} You can manage your products <Link to="/todos">here</Link>
                </div> */}
                <div className="container">
                    Click  to get a customized welcome message 
                    <button className="btn btn-success" onClick={this.retriveWelcomeMessage}>Get Welcome Message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
                <div className="container">

                </div>
            </>
        )
        
    }
    retriveWelcomeMessage(){
        ProductService.getProducts()
        .then(response => this.handleSuccessfulResponse(response))
        .catch(response => alert("REST API Error"))
    }

    handleSuccessfulResponse(response){
        this.setState({welcomeMessage: response.data})
    }
}

export default WelcomeComponent;