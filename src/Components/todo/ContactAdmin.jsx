import React, { Component } from 'react';
import emailjs from 'emailjs-com';
//import { render } from '@testing-library/react';

class ContactAdmin extends Component {

    constructor(props) {
        super (props)
        this.sendEmail = this.sendEmail.bind(this);
    }
    sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm('gmail', 'template_DeU8gZM5', e.target, 'user_Xr1eI54Svnwet49d92YE9')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        alert ("Thank you for your request, we will contact you as soon as possible")
      }

    render () {
      return(
        <div>
            <h1>Contact Admin</h1>
            <p>Hello. We are happy that you are here. With this form you can contact the admin of the retail shop information system.</p>
              <p>If you have any requests or if you want to create a retail store account, don´t hestitate to contact us.</p>
            <form className="contact-form" onSubmit={this.sendEmail}>
              <input type="hidden" name="product_ID" /> 
              <label>Name</label>
              <input type="text" name="user_name"></input>
              <label>Email</label>
              <input type="email" name="user_email" />   
              <label>Message</label>
              <textarea name="message"></textarea>
              <input type="submit" className="btn btn-primary" value="Send" />
            </form> 
        </div>
        
      )
    }

}


  export default ContactAdmin;
