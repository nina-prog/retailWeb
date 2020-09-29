import React, { Component } from 'react';
import emailjs from 'emailjs-com';

/**
 * This component is responsible to send product information to a customer
 */
class NotifyWhenInStock extends Component {

    constructor(props) {
        super (props)
        this.sendEmail = this.sendEmail.bind(this);
    }

    /**
     * Method which sends product information to an user
     * @param {event} event event if user clicks on "send Email"
     */
    sendEmail(e) {
      e.preventDefault();

      /**
       * This method uses the form which can be filled in by the visitor 
       * @param {string} gmail the mail will be sent to an gmail address
       * @param {string} template_DeU8gZM5 this template is used in emailjs
       * @param {event} target event to send mail
       * @param {string} user_Xr1eI54Svnwet49d92YE9 user id for emailjs
       */

      emailjs.sendForm('gmail', 'retail_shops', e.target, 'user_Xr1eI54Svnwet49d92YE9')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      }

    render () {
      return(
        <form className="contact-form" onSubmit={this.sendEmail}>
        <input type="hidden" name="product_ID" /> 
        <label>Email</label>
        <input type="email" name="user_email" />
        <input type="submit" className="btn btn-primary" value="Send" />
      </form>
      )
    }
}

  export default NotifyWhenInStock;