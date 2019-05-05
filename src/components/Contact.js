import React, { Component } from 'react';
import $ from 'jquery'

export default class Contact extends Component {


// changes the header subtitle
  changeHeader = () => {
    $('.navsubtitle, .navsubtitlestick').text("Hello out there")
    $('.navtitle').text("Contact Me")
    $('.navsubtitle, .navsubtitlestick').show()
  }

// gives a confirmation that the email was sent

  emailForm = () => {
    $('.submit').click(function() {
      alert( "email submitted!" );
    });
  }

  componentDidMount(){
    {this.changeHeader()}
    {this.emailForm()}
  }

// contact form as per code given by EmailJS, thwe library used for this form
  render() {
    return (
      <div>
      <div className="empathy">I want to connect with you and exchange stories. I'm not kidding. I live to have conversations with new people. So, leave me a message here.</div>
      <div className="contactcontainer">
        <div className="formcaption">I'll be in touch soon.</div>
        <form name="emily-contact" method="POST" data-netlify="true" action="/" netlify>
          <input type="hidden" name="contact_number" />
          email: <input type="email" name="user_email" className="email_field" />
          <br></br>
          name: <input type="text" name="user_name" className="name_field" />
          <br></br>
          message: <textarea name="text" className="message_field" />
          <br></br>
          <input type="submit" value="Send" className="submit" />
        </form>
      </div>
      </div>
    );
  };


}
