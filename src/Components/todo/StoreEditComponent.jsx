import React, {Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import ProductService from '../../API/todo/ProductService.js'
import BlockComponent from './BlockComponent'
import CreateNewProductComponent from './CreateNewProductComponent.jsx'

/**
 * This component is responsible for shop changes
 */

class StoreEditComponent extends Component {
     constructor(props) {
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
        /* HelloWordService.getStoreProducts(this.props.match.params.id) */
        ProductService.getProducts()
            .then(response => this.handleSuccessfulResponse(response))
            .catch(response => alert("REST API Error"))
 
        /*  */
    }
    /**
     * Method which handles sucessful responses
     * @param {object} res object with all data of the shop
     */

    handleSuccessfulResponse(res) {
        console.log(res.data)
        this.setState({
            data: res.data,
            isDataFetched : true
        })
    }
    
    render () {
        if (!this.state.isDataFetched) return null;
        let productCards = this.state.data.map(product => {
            return (
                <Col sm="4" className="jtColMagin" key={product.productId}>
                    <BlockComponent  product={product} view="Edit" />
                </Col>
            )
        });
        return (
            <>
                <div className="jtScroll">
                    <h1>Store Edit: List Products</h1>
                    <CreateNewProductComponent />
                    <h6>ViewBlockComponent</h6>   
                    <Container>
                        <Row >
                            {productCards}
                        </Row>
                    </Container>
                </div>        
                
            </>
        );
    }
}

export default StoreEditComponent;