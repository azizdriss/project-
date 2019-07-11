import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "./firebase";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      message: ""
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    console.log("onFormSubmit", e);
    console.log("this.state", this.state);
    e.preventDefault();
    firebase
      .database()
      .ref("form")
      .push() // id
      .set({
        form: this.state
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <br />
        <div>
          <link
            href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"
            rel="stylesheet"
            id="bootstrap-css"
          />
          {/*---- Include the above in your HEAD tag --------*/}
          <link
            href="https://fonts.googleapis.com/css?family=Oswald:700|Patua+One|Roboto+Condensed:700"
            rel="stylesheet"
          />
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <section id="contact" className="content-section text-center">
            <div className="contact-section">
              <div className="container">
                <h2>Contact Us</h2>
                <p>
                  Feel free to shout us by feeling the contact form or visiting
                  our social network sites like Fackebook,Whatsapp,Twitter.
                </p>
                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <form
                      action="#"
                      className="form-horizontal"
                      onSubmit={this.onFormSubmit}
                    >
                      <div className="form-group">
                        <label htmlFor="exampleInputName2">Name</label>
                        <input
                          onChange={e => this.handleChange(e)}
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail2">Email</label>
                        <input
                          onChange={e => this.handleChange(e)}
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="jane.doe@example.com"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail2">Phone</label>
                        <input
                          onChange={e => this.handleChange(e)}
                          type="phone"
                          name="phone"
                          className="form-control"
                          placeholder="+21629567669"
                        />
                      </div>
                      <div className="form-group ">
                        <label htmlFor="exampleInputText">Your Message</label>
                        <textarea
                          name="message"
                          onChange={e => this.handleChange(e)}
                          className="form-control"
                          placeholder="Description"
                          defaultValue={""}
                        />
                      </div>
                      <button type="submit" className="btn btn-default">
                        Send Message
                      </button>
                    </form>
                    <hr />
                    <h3>Our Social Sites</h3>
                    <ul className="list-inline banner-social-buttons">
                      <li>
                        <a href="#" className="btn btn-default btn-lg">
                          <i className="fa fa-twitter">
                            {" "}
                            <span className="network-name">Twitter</span>
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn btn-default btn-lg">
                          <i className="fa fa-facebook">
                            {" "}
                            <span className="network-name">Facebook</span>
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn btn-default btn-lg">
                          <i className="fa fa-youtube-play">
                            {" "}
                            <span className="network-name">Youtube</span>
                          </i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

/*  import React from 'react';
  import logo from './logo.svg';
  import './App.css';
  import Image from './imageInSrc.jpg'
  import FlippingCardPage from "./card";
  import Example from './navbar.js'
  import 'bootstrap/dist/css/bootstrap.min.css';
  var FontAwesome = require('react-fontawesome');
  import Form from './form'


  class App extends React.Component {
    state = {
      name: '',
     email:'',
     phone:'',
     message:''
     }
    addData(value) {
      this.setState({ name: value },
        () => console.log(this.state.todolist))
    }

    render(){
    return ( <div>
<Form />
</div>

    );}
  }

  export default App;
*/
