import React, { Component } from 'react';
import emailjs from 'emailjs-com';


//

class NotifyWhenInStock extends Component {

    constructor(props) {
        super (props)
        this.sendEmail = this.sendEmail.bind(this);
    }
    sendEmail(e) {
      e.preventDefault();

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