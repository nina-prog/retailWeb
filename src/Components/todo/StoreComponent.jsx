import React, {Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import BlockComponent from './BlockComponent';
import StoreService from '../../API/todo/StoreService.js'

class StoreComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            isProductInWishlist: false
        }
       this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    }
    componentDidMount(){
        StoreService.getStoreInformation(this.props.match.params.id)
            .then(response => this.handleSuccessfulResponse(response))
            .catch(response => alert("REST API Error"))
    }
    handleSuccessfulResponse(res) {
        console.log(res.data)
        this.setState({
            data: res.data,
            isDataFetched : true
        })
    }

    render() {
        if (!this.state.isDataFetched) return null;
        let productCards = this.state.data.products.map(product => {
            return (
                <Col sm="4" className="jtColMagin" key={product.productId}>
                    <BlockComponent  product={product} view="Product" />
                </Col>
            )
        });
        return (
            <div className="jtScroll">
                <div className="col ">
                    <div className="row-sm">
                        <div className="container">
                            <h1>Store name: {this.state.data.name}</h1>
                            Store Address: {this.state.data.address} <br/>
                            openingHours: {this.state.data.openingHours}<br/>
                            customer Serivce: {this.state.data.customerService}<br/>
                            phone: {this.state.data.phoneNumber}<br/>
                            email: {this.state.data.email}<br/>
                            important Notification: {this.state.data.importantNotifications}<br/>
                            limitations: {this.state.data.limitations}<br/>
                        </div>
                    </div>
                    <div className ="row-sm">
                        <h3>View Store Producsts:</h3>
                        <Container>
                            <Row>
                                {productCards}
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}

export default StoreComponent;