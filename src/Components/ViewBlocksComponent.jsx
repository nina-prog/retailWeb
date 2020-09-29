import React, {Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import ProductService from '../API/ProductService.js'
import BlockComponent from './BlockComponent'

import{Link} from 'react-router-dom'
/**
 * This component is responsible for the overview of the products
 */

class ViewBlockComponent extends Component {
     constructor(props) {
        super(props)
        this.state = {
            
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
                <h6>ViewBlockComponent</h6> 
                add Filter:   
                <Link className="btn btn-outline-success my-2 my-sm-0"  to={`/search?postalCode=${this.state.searchfield}`}>postal code</Link>
                <Link className="btn btn-outline-success my-2 my-sm-0"  to={`/search?category=${this.state.searchfield}`}>category</Link>
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