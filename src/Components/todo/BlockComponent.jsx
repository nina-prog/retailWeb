import React, {Component } from 'react'
import { withRouter } from 'react-router'
import {Card} from 'react-bootstrap'

/**
 * This component displays all products 
 */

class BlockComponent extends Component {
    render () {
        return (
            <Card>
                <Card.Img width="100%" src={'data:image/jpeg;base64,'+this.props.product.picture} alt="Card image cap"/>
                <Card.Body>
                    <Card.Title>Title: {this.props.product.name}</Card.Title>
                    <Card.Subtitle>Price:  {this.props.product.price}</Card.Subtitle>
                    <Card.Text> Description: {this.props.product.description} </Card.Text>
                    <Card.Link href={`/product/${this.props.product.productId}`}>View Product</Card.Link>
                    {/* {(this.props.view === 'Product') && <Card.Link href={`/product/${this.props.product.retailStore}`}>View Store</Card.Link>} */}
                    {(this.props.view === 'Edit') && <Card.Link href={`/product/edit/${this.props.product.productId}`}>Edit Product</Card.Link>}
                </Card.Body>
            </Card>
        )
    }
}
export default withRouter(BlockComponent);

