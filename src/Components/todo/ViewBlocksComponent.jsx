import React, {Component } from 'react'
import HelloWordService from '../../API/todo/HelloWordService.js'
import BlockComponent from './BlockComponent'

class ViewBlockComponent extends Component {
     constructor(props) {
         console.log('CONSTRUCTOR')
        super(props)
        this.state = {
            productId: 3,
            category: null,
            picture: null,
            name: "Default",
            price: 4.90,
            retailStore: null,
            description: "gummi bears",
            limitations: "Feb 45",
            stock: 5,

            data: null,
            isDataFetched: false
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
    } 
    componentDidMount(){
        console.log('COMOPONENT DID MOUNT')
        HelloWordService.getProducts()
            .then(response => this.handleSuccessfulResponse(response))
            .catch(response => alert("REST API Error"))
    }
    handleSuccessfulResponse(res) {
        console.log("API Call in ViewBlocksComponent: ")
        console.log(res.data)
        this.setState({
            data: res.data,
            isDataFetched : true
        })
    }
    render () {
        if(!this.state.isDataFetched) return null;
        return (
            <>
            <h6>ViewBlockComponent</h6>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            {
                                this.state.data.map(
                                todo =>
                                    <td><BlockComponent {... todo} to={`/product/${todo.productId}`} /></td>
                                )
                            }
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }
}

export default ViewBlockComponent;