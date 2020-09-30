import React, {Component } from 'react'

/**
 * This component is responsible for the welcome at the beginning 
 */
class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        
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
                    {this.state.welcomeMessage}
                </div>
                
            </>
        )
    }
}

export default WelcomeComponent;