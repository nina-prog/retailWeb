import React, {Component } from 'react'
import Tomatos from '../../img/Tomatos.jpeg'

class ProductComponent extends Component {
    render(){
        return (
            <>
                <h1>Titelxxxx</h1>
                <img src={Tomatos} width='100' heigt='100' />
                <div className="container">
                    Preis
                    Zur Merkliste
                    Notify when in Stock
                </div>
                <div>
                    <h2> Produktbeschreibung </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </>
        )
    }
}

export default ProductComponent;
