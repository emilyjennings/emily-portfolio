import React, { Component } from 'react';
import $ from 'jquery'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }


// changes the header subtitle
  changeHeader = () => {
    $('.navsubtitle, .navsubtitlestick').text("Hello out there")
    $('.navtitle').text("Contact Me")
    $('.navsubtitle, .navsubtitlestick').show()
    $('.navlinks').show()
  }

  backgroundChange = () => {
    $("body").css({
      'background-color': '#262c2d',
      'background-image':
        `none`,
    });
  }

  componentDidMount(){
    {this.changeHeader()}
    {this.backgroundChange()}
  }

  // Code for the contact form submission given by Netlify documentation
  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

// contact form as per code given by netlify's form docs
  render() {
    const { name, email, message } = this.state;
    return (
      <div className="contactpage">
        <div className="empathy">Leave me a message and let's talk.</div>
        <div className="contactcontainer">
          <div className="formcaption">I'll be in touch soon.</div>
          <form onSubmit={this.handleSubmit}>
            <p>
              <label>
                Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message" value={message} onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <button id="submit" type="submit">Send</button>
            </p>
          </form>
        </div>
        <div className="space"></div>
      </div>
    );
  };


}
