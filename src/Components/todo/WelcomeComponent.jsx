import React, {Component } from 'react'
import{Link} from 'react-router-dom'
import HelloWorldService from '../../API/todo/HelloWordService.js'

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
                <div className="container">
                    Welcome {this.props.match.params.name} You can manage your todos <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    Click  to get a customized welcome message 
                    <button className="btn btn-success" onClick={this.retriveWelcomeMessage}>Get Welcome Message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        )
        
    }
    retriveWelcomeMessage(){
        console.log("Sucessfillll!");
        HelloWorldService.executeHelloWorldService()
        .then(response => this.handleSuccessfulResponse(response))
       //.catch()
    }

    handleSuccessfulResponse(response){
        this.setState({welcomeMessage: response.data})
    }
}

export default WelcomeComponent;