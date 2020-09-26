import React, {Component } from 'react'
import { withRouter } from 'react-router'
import {Card} from 'react-bootstrap'

/**
 * This component displays all products 
 */

class BlockComponent extends Component {
    render () {
        const backupImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAM1BMVEXf39+goKDe3t6dnZ3i4uKmpqabm5vS0tLV1dW3t7fLy8vDw8O6urqqqqqioqLKysqwsLA0gLe7AAAE+ElEQVR4nO2di3KDIBBFCaB5iv7/15aLihCNtcmAKd470+Yh4npcloVIIuQGiS2FNlQjwoeP69lcfL6/iLaIvkoR6JeDokRfbDwlX6WQi7sP1YfWPB9PPGmxgtj2uGxcj1yvaConZzXFZoSPT7VP+84rGV9GcKPK3XMd2Y+Xz3ik/++vQ3y1liyeTjM66dDy6XSDFyI2cH5VIk9Z3B7sGNJaLrlUzeuSwzUe/ma7y/jc1ixcrloIsbV8ySKDVXc9jMiADCDGAzKANnemBYsIGBMh+gEF0Q3IAGI8YH4AEYFgQBBEALEtCDqCIAKIDBgPICIAA314DIcHIMgAIgMygMiA+QFEBGQAsS1wPhEigv6uwb1t2FtkQAYQGZABRAZkADE/wHiBEMiADCASEIQgiABi30g/gNgvkAFEBmQAkQEZQGTgGOi9bdhb9AIygDhe4GeuUHIG+nOlNTB9W9CPj3W9pDUxeUzUplZOtZUKFb6uVbzNv+3+nxPbmJxBdYLM6X2pIhgsXeONKoWB6q5vKwuD1DHRMqhv7/cJphAG6vb27jITg6QUdKUsg7e6eGdaUQwuf5cojIG+23Sg/otUlZFBUg0MpL6rv+YFTUkMahsTLYMhTzLB32pq1GD/LAwS17/AwNicyRJQv1BwDPL0C4nr7xnYmOgZ2JO6nqW83Kv11pGPQWrNGChlzhrrCbW81t/BIFdbCPzgrIcv3NTNqicUFw8mP7hOi0ovtVmJCQUzuExJo26+wg9SQxgYSN8vGP9NrvbNh/oGP8jBQIV9YxV8Ae564lRUjhQxOIUMrpEfmP0YZBgvBAyQOPuNZjpvVVV7tYWsDIy/vP22tja+MajrTc0ZlDN/0AYx8aQeuj+kvoQnbROpp8SxLD+IGJi6k26arI1PWcItwqBQMgObLnf3+8PUYQxUnXZlg/dKZmCGyfbQCRTGFE+eUdR4QcXjhQUZpdy1CLsGla9vTFz/NgauKUg4gjksAzQFKfwnc55BtniQVFv9oDcjTJ5z+kFaCPNcOQ4ECJF2Qzckj0gZxnIZx867MnAUbMpwG60JRtPHYWDP8VTXozVhYzgOA1XXXTuZcdmBQWqNcyjzmGhcxqi61t0kOvy8jhCNzxXLnUsLPcABiD+P1Xc/2VxU3/iCwegB/e8ujXZMjSEjg/TxYImBqpwHLBzdT7gXxUBFc6ruQTWvDjs1hqLaAsaNkR8YVb06rJwaQ1lzqtHYGQiatQUDTXYGieuftYWhIbz0AynaukQ/iO7BMK9jwbCLm1w1hcWDWzgi/A2Bm0ZQp7zzykk1tYXxvuVfELjP4FoUrkRJDFo7Mj7fB20ZoegbSuJZKQzceMEvZIiO/no/3adQp0L6BTAIftZ3o/qyuHupCD9oewcIbjwY3GFpkUroLFpn8YMc8eBxe1ulMPhs/YIpIh58KDIogUFnqk/13+OB7QyWlyz68P8F6xtTH2D2s/Phr6wvbX9+L7mBXPMt/sWa7+QW/gMGycXvEiUDiAzIACIDMoDIgPkBRAT0A4jfj0QGELsFMoDIgH0jRAZkALFvdDHx8BDYL0R3Ch9WbAtsCxAZkAFEBpxHgjivTAYQGTAeQBw30g8gMiADiAw4eQCRAdsCRARkAJEB4wHEcSMZQGTAeADRDcgAIgPmSE6EQASCDCAyYI4EEQH9AMqzuv67RQRsCxARkIHVD9yhN0e3gqRsAAAAAElFTkSuQmCC"
    
        return (
            <Card>
                <Card.Img width="100%" src={'data:image/jpeg;base64,'+this.props.product.picture} onError={(e)=>{e.target.onerror = null; e.target.src=backupImg}} alt="Card image cap"/>
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

