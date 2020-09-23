import React, {Component} from 'react'
import {Formik, Form, Field, ErrorMessage, prepareDataForValidation} from 'formik';
import RetailDataService from '../../API/todo/RetailDataService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import HelloWordService from '../../API/todo/HelloWordService.js';


class EditStoreInformationUpdate extends Component {
    constructor(props) {
        super (props)
        this.state = {
            product_id: '1',
            name: 'ALDI', 
            address: 'Musterstraße',
            openingHours: 'No 10-12',
            restrictions: 'only 1 toilett paper'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
       // this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);

    }


    handleChange(event) {
        this.setState({
            [event.target.name]
                :event.target.value
        })
    }

    handleSave(event) {
            HelloWordService.updateStoreInformation(JSON.stringify(this.state), this.state.product_id)
            .then(response => alert("Successfully saved!"))
            //.catch()
        };
    
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


    //onSubmit(values) {
       // console.log(values)

   // }


    render() {

       

        return (
    <div> 
        <h1>Edit Store Information</h1>
        
            <div className="container">
            <Formik
            
            initialValues={{
                    shopname: shopname,
                    adresse: adresse
             }}

                    
          //  onSubmit={this.onSubmit}  
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
                            <Field className="form-control" type="text" name="shopname" value={this.state.shopname} onChange={this.handleChange}/>       
                          </fieldset>
                          
                        <fieldset className="form-group">
                             <label> Address </label>
                            <Field className="form-control" type="text" name="adresse" value={this.state.title} onChange={this.handleChange}/>       
                          </fieldset>
                        <button classNametype="btn btn-success" type ="save" onClick={this.handleSave} >Save</button> 

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