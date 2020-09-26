import React, {Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import ProductService from '../../API/todo/ProductService.js'
import BlockComponent from './BlockComponent'

/**
 * This component is responsible for the overview of the products
 */

class ViewBlockComponent extends Component {
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
        ProductService.getProducts()
            .then(response => this.handleSuccessfulResponse(response))
            .catch(response => alert("REST API Error"))
    }

    /**
     * Method which handles sucessful responses
     * @param {object} res object with all products 
     */

    handleSuccessfulResponse(res) {
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
                    <BlockComponent  product={product} view="Product" />
                </Col>
            )
        });
        return (
            <>
                {/* <h6>ViewBlockComponent</h6> */}   
                <div className="jtScroll">
                    <Container>
                        <Row>
                            {productCards}
                        </Row>
                    </Container>
                </div>        
            </>
        );
    }
}

export default ViewBlockComponent;