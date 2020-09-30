import React, {Component } from 'react'
import{Link} from 'react-router-dom'

/**
 * This Component is responsible for the footer on the interface
 */
class FooterComponent extends Component {
    render(){
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <span className="text-muted">Copyright by the Web Retail Team</span>
                         </div>
                        <div className="col">
                        <Link className="nav-link" to="/ContactAdmin">Contact Admin</Link>
                         </div>
                     </div>
                </div>
            </footer>
        )
    }
}

export default FooterComponent;