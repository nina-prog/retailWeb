import React, {Component } from 'react'
import{Link} from 'react-router-dom'

class FooterComponent extends Component {
    render(){
        return (
            <footer className="footer">
                
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <span className="text-muted">All Right has Joel</span>
                         </div>
                        <div class="col">
                        <Link className="nav-link" to="/ContactAdmin">Contact Admin</Link>
                         </div>
                     </div>
                </div>
                       {/*  <span className="text-muted">All Right has Joel</span>
                        <Link className="nav-link" to="/ContactAdmin">Contact Admin</Link> */}
                
                
            </footer>
            
        )
    }
}

export default FooterComponent;