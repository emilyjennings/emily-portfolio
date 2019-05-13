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
        <div className="contactcontainer">
          <div className="formcaption">I'll be in touch soon.</div>
          <form onSubmit={this.handleSubmit}>
            <div className="input-row-1">
                <label>
                  Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
                </label>
                <br></br>
                <label>
                  Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
                </label>

            </div>
            <div className="input-row-2">

                <label>
                  Message: <textarea name="message" maxlength="140" value={message} onChange={this.handleChange} />
                </label>

            </div>

              <button id="submit" type="submit">Send</button>

          </form>
        </div>

        <div className="space"></div>
      </div>
    );
  };


}
