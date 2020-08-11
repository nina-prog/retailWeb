import React, {Component} from 'react'
import {Formik, Form, Field, ErrorMessage, prepareDataForValidation} from 'formik';
import RetailDataService from '../../API/todo/RetailDataService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'


class EditStoreInformationUpdate extends Component {
    constructor(props) {
        super (props)
        this.state = {
            store_id : this.props.match.params.id,
            shopname: 'ALDI',
            adresse: 'Musterstraße',

        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    
    validate(values) {
        let errors = {}          //leeres objekt erstellen, welches Error händelt
        if(!values.shopname) {
            errors.shopname = "Enter a shopname"
        }   else if (values.shopname.length<1) {
            errors.shopname = 'Enter at least 5 charachters'
        }

        if (!values.adresse) {
            errors.adresse = "sEnter an adress"
        }

        return errors;

    }


    onSubmit(values) {
        console.log(values)

    }


    render() {

        let shopname = this.state.shopname
        let adresse = this.state.adresse

        return (
    <div> 
        <h1>Edit Store Information</h1>
        
            <div className="container">
            <Formik
            
            initialValues={{
                    shopname: shopname,
                    adresse: adresse
             }}

                    
            onSubmit={this.onSubmit}  
            validate={this.validate}   
            validateOnChange={false}
            validateOnBlur={false}  


           

            >
            {
                   (props) => (
                    
                    <Form>
                        <ErrorMessage name ="shopname" component="div" 
                                        className="alert alert-warning"/>
                        <ErrorMessage name ="adresse" component="div" 
                                        className="alert alert-warning"/>
                        <fieldset className="form-group">
                             <label>Name</label>
                            <Field className="form-control" type="text" name="shopname"/>       
                          </fieldset>
                          
                        <fieldset className="form-group">
                             <label> </label>
                            <Field className="form-control" type="text" name="adresse"/>       
                          </fieldset>
                        <button classNametype="btn btn-success" type ="submit">Save</button> 

                    </Form>



                  
                   )
            }

            </Formik>



        </div>
        
        
        
        ProductComponentUpdate -{this.props.match.params.id}</div>
        )
}

}

export default EditStoreInformationUpdate;