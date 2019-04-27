import React, { Component } from 'react';
import $ from 'jquery'

export default class Contact extends Component {


// changes the header subtitle
  changeHeader = () => {
    $('.navsubtitle').text("contact me")
  }

// gives a confirmation that the email was sent

  emailForm = () => {
    $('.submit').click(function() {
      alert( "email submitted!" );
    });

  }


// contact form as per code given by EmailJS, thwe library used for this form
  render() {
    return (
      <div className="contactcontainer">
        <div className="formcaption">Leave me your name and what you're looking for! I'll be in touch soon.</div>
        <form id="emily-contact" >
          <input type="hidden" name="contact_number" />
          email: <input type="email" name="user_email" className="email_field" />
          name: <input type="text" name="user_name" className="name_field" />
          message: <textarea name="text" className="message_field" />
          <input type="submit" value="Send" className="submit" />
        </form>
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
    {this.emailForm()}
  }


}
