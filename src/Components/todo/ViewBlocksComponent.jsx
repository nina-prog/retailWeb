import React, {Component } from 'react'
import HelloWordService from '../../API/todo/HelloWordService.js'
import BlockComponent from './BlockComponent'
import { Container, Row, Col } from 'reactstrap';
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
        let productCards = this.state.data.map(product => {
            return (
                <Col sm="4" key={product.productId}>
                    <BlockComponent  product={product} />
                </Col>
            )
        });
        return (
            <>
                <h6>ViewBlockComponent</h6>           
                <Container>
                    <Row>
                        {productCards}
                    </Row>
                </Container>
            </>
        );
    }
}
export default ViewBlockComponent;