import React, {Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import HelloWordService from '../../API/todo/HelloWordService.js'
import BlockComponent from './BlockComponent'
import CreateNewProductComponent from './CreateNewProductComponent.jsx'

class StoreSettingComponent extends Component {
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
        HelloWordService.getProducts()
            .then(response => this.handleSuccessfulResponse(response))
            .catch(response => alert("REST API Error"))

        /* HelloWordService.deleteProduct(15)
            .then(response => alert("Product 15 is deleted"))
            .catch(response => alert("Error while deleting, please try again")) */
    }
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
                <Col sm="4"  key={product.productId}>
                    <BlockComponent  product={product} />
                </Col>
            )
        });
        return (
            <>
                <div className="jtScroll">
                    <h1>List Products</h1>
                    <CreateNewProductComponent />
                    <h6>ViewBlockComponent</h6>   
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

export default StoreSettingComponent;