import React, {Component } from 'react'
import { withRouter } from 'react-router'

class BlockComponent extends Component {
     constructor(props) {
        super(props)
        console.log('Block Props:')
        console.log(this.props)
    } 

    render () {
        return (
                <div className="container border border-secondary">
                    <h1>Title: {this.props.name}</h1>
                        <br/>
                        Price:  {this.props.price}<br/>
                        Remaining stock:  {this.props.stock}<br/>
                        Description: {this.props.description}<br/>
                        {//<button className="btn btn-success"onClick={this.loadProduct}> Load </button>
                        }           
                </div>
            )
    }
}
export default withRouter(BlockComponent);