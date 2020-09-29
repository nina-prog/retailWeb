import React, {Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import ProductService from '../API/ProductService.js'
import BlockComponent from './BlockComponent'

/**
 * This component is responsible for the product search
 */

class SearchComponent extends Component {
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
        console.log()
        ProductService.searchProduct(this.props.location.search)
            .then(response => this.handleSuccessfulResponse(response))
            .catch(response => alert("REST API Error")) 
    }
    
    /**
     * Method which handles sucessful responses
     * @param {object} res object with all data of the product
     */
    
    handleSuccessfulResponse(res) {
        if (typeof res.data !== 'undefined' && res.data.length > 0) {
            // the array is defined and has at least one element
            this.setState({
                data: res.data,
                isDataFetched : true
            })
        } else {
            alert("No search results");
            this.props.history.goBack()
        }
        
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
                <h2>Search</h2> 
                <h6>Search results:</h6> 
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

export default SearchComponent;