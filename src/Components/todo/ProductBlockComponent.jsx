import React, {Component } from 'react'
import HelloWorldService from '../../API/todo/HelloWordService.js'

/**
 * This component is responsible to see all procuts on the products page
 */

class ProductBlockComponent extends Component {
     constructor(props) {
        super(props)
        
        //this.state = JSON.parse(HelloWorldService.getFirstProduct()),
        this.state = {
            data: '',
            title: 'herbert',
            price: 5.90,
            stock: 2,
            product_id: 1
        }
        this.loadProduct=this.loadProduct.bind(this)
        this.handleSuccessfulResponse=this.handleSuccessfulResponse.bind(this)

        this.loadProduct ()
        
    } 
    /**
     * This method loads the product
     */

    loadProduct(){
        
        HelloWorldService.getProductInformation(2)
            .then(response => this.handleSuccessfulResponse(response))
            .catch(response => alert("REST API Error"))
        
        
        //console.log(this.data)
        
        /* this.setState({
            
        }) */
    } 

    /**
     * This method handles a successful response
     * @param {object} response object with all needed data
     */
    handleSuccessfulResponse(response) {
        console.log(response.data)
        
        document.getElementById("title").innerHTML = response.data.name;
        document.getElementById("price").innerHTML = 'Price: ' + response.data.price;
        document.getElementById("description").innerHTML = response.data.description;
        document.getElementById("stock").innerHTML = response.data.stock;
    }

    render () {
        return (
                <div className="container border border-secondary">
                    {//console.log("Load Product_id " + {this.props.product_id})}
                    }<h1><div id="title">Titel: {this.state.title}</div></h1>
                        <div>
                            
                            Price:  <span id="price"></span><br/>
                            Remaining stock:  <span id="stock"></span><br/>
                            Description: <span id="description"></span><br/>
                            product_id: {this.props.product_id}
                            <button className="btn btn-success"onClick={this.loadProduct}> Load </button>
                        </div>
                        
                </div>

            )
    }
}



export default ProductBlockComponent;