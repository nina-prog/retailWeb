import React, {Component } from 'react'
import Tomatos from './Components/img/Tomatos.jpeg'

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
                    Produktbeschreibung
                    xxxxxxxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </div>
            </>
        )
    }
}

export default ProductComponent;
