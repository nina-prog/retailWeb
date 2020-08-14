import React, {Component } from 'react'
import HelloWorldService from '../../API/todo/HelloWordService.js'

class ProductBlockComponent extends Component {
     constructor(props) {
        super(props)
        
        //this.state = JSON.parse(HelloWorldService.getFirstProduct()),
        this.state = {
            title: 'herbert',
            price: 5.90,
            stock: 2
        }
        //--->  props.product_id 
        this.loadProduct=this.loadProduct.bind(this)
        
    } 
    loadProduct(event){
        let data
        HelloWorldService.getFirstProduct()
        .then(response => data = (response))
        .catch(response => alert("REST API Error"))
        
        
        console.log(data)
        
        /* this.setState({
            title: product.name,
            price: product.price,
            stock: product.stock,
        }) */
    }
    

    render () {
        return (
                <div className="container border border-secondary">
                    {//console.log("Load Product_id " + {this.props.product_id})}
                    }<h1><div id="title">Titel: {this.state.title}</div></h1>
                        <div>
                            
                            Price:  {this.state.price}<br/>
                            Remaining stock:  {this.state.stock}<br/>
                            product_id: {this.props.product_id}
                            <button className="btn btn-success"onClick={this.loadProduct}> Load </button>
                        </div>
                        
                </div>

            )
    }
}



export default ProductBlockComponent;